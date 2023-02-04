import './App.css';
import Search from './component/SearchComponent/Search'
import Weather from './component/WeatherComponent/CurrentWeather';
import { WEATHER_API_URL, Weather_API_key } from './api.js';
import { useState } from 'react';

function App() {

  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const handleOnSearchChange = (data) => {
    const [latitude, longitude] = data.value.split(" ");
    const currentWeather = fetch(
      `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${Weather_API_key}`
    );
    const forecastWeather = fetch(
      `${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${Weather_API_key}`
    );
    Promise.all([currentWeather, forecastWeather])
      .then(async (response) => {
        const weatherData = await response[0].json();
        const forecastData = await response[1].json();
        setWeatherData(weatherData);
        setForecastData({ city: data.label, ...forecastData });
      })
      .catch((err) => (console.log(err)));
  };

  console.log(weatherData);

  return (
    <div className='container'>
      <Search onSearchData={handleOnSearchChange} />
      <div className='weatherComponent'>
        <Weather weatherData={weatherData} forecastData={forecastData} />
      </div>
    </div>
  );
}

export default App;
