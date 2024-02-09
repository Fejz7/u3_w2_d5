

import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

function MainWeather() {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeatherData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9c04de7779eb520cd5b30ad8cfb6a558`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setIsLoading(false);
      setCityName('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city name"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <button onClick={fetchWeatherData} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Get Weather'}
      </button>

      {weatherData && (
        <div>
          <h2>Weather in {weatherData.name}</h2>
          <p>temperature:{weatherData.main.temp}</p>
          <p>humidity:{weatherData.main.humidity}</p>
          <p>pressure:{weatherData.main.pressure}</p>

          
        </div>
      )}
    </div>
  );
}



export default MainWeather;
