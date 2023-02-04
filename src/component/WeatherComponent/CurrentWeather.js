import './CurrentWeather.css'

const Weather = (weatherData) => {
    return (
        <div className='card'>
            <div className='weather-top'>
                <div className='weather-top-text'>
                    <p className='city'>Nanjing</p>
                    <span className='temperature'>10°C</span>
                </div>
                <img classname="weather-icon" alt="weather" src="icons/01d.png" />
            </div>
            <div className='weather-bottom'>
                <div className='weather-description'>
                    <div className='decription-row'>
                        <span className = 'decription-label'>temperture-min</span>
                        <span className='decription-value'>10</span>
                    </div>
                    <span className='temperture-min'>10</span>
                    <span className='temperture-max'>20</span>
                    <span className='humidity'>
                            81
                    </span>
                    <span className='pressure'>
                        <p>1022</p>
                    </span>
                    <span className='cloud-condition'>
                        <p>"overcast clouds"</p>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Weather;