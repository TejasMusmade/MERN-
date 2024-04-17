
import React, { useEffect, useState } from 'react';

const Weather = ({ apiKey, city }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [apiKey, city]);

  return (
    <div>
      {weatherData && (
        <div>
          <p>Location: {weatherData.location.name}</p>
          <p>Temperature: {weatherData.current.temp_c} °C</p>
          <p>Weather: {weatherData.current.condition.text}</p>
          <p>Humidity: {weatherData.current.humidity}%</p>
          <p>Wind Speed: {weatherData.current.wind_kph} km/h</p>
        </div>
      )}
    </div>
  );
};

export default Weather;

