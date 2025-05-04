import React, { useState, useEffect } from 'react';

import axios from 'axios';



function WeatherApp() {

  const [weatherData, setWeatherData] = useState(null);

  const [city, setCity] = useState('London');



  useEffect(() => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
      .then((response) => setWeatherData(response.data))
      .catch((error) => console.error("API Error:", error));
  }, [city]);

  const handleSearch = (e) => {

    setCity(e.target.value);

  };



  return (

    <div>

      <input type="text" value={city} onChange={handleSearch} />

      {weatherData && (

        <div>

          <h2>Weather in {weatherData.name}</h2>

          <p>Temperature: {weatherData.main.temp}°C</p>

          <p>Humidity: {weatherData.main.humidity}%</p>

        </div>

      )}

    </div>

  );

}

export default WeatherApp;