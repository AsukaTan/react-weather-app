import './CurrentWeather.css'
import React from 'react';

const Weather = (weatherData) => {
    return (
        <div className='card'>
            <div className='weather-top'>
                <div className='weather-top-left'>
                    <p className='city'>{weatherData.city}</p>
                    <span className='temperature'>{}</span>
                </div>
                <div className='weather-top-right'>
                    <img classname="weather-icon" alt="weather" src="icons/01d.png" />
                </div>
            </div>
        </div>
    );
}

export default Weather;