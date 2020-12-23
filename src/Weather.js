import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
// import WeatherNow from "./WeatherNow";

// Mudar para WeatherNow
import UpdatedDate from "./UpdatedDate"

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);
  
  function displayWeather(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: response.data.dt * 1000,
      temperature: Math.round(response.data.main.temp),
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      windSpeed: Math.round(response.data.wind.speed),
    })
  }

  function updateCity(event) {
    setCity(event.target.value);
    // console.log(setWeatherData.city)
  }

  function handleSubmit(event) {    
    let apiKey = "95b79d65e0e57550f167b80420d22ce8";
    // let apiKey = "3357bf36b64fb2b6b88c4092929f0cdf" API FP bloqueado
    // "95b79d65e0e57550f167b80420d22ce8" nova mail LULU
    console.log(city)
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }

  if (weatherData.ready) {
    return(
      <div className="Weather">
        <div className="row">
          <div className="col-6">
            <h1 className="text-capitalize"><strong>{city}</strong></h1>
          </div>
          <div className="col-6">
            <form onSubmit={handleSubmit} className="form-inline" >
              <input
              className="form-control mr-2"
              type="search"
              placeholder="Enter city name"
              autoFocus="on"
              onChange={updateCity}
              />
              <input
              className="btn btn-success"
              type="submit"
              value="Search"
              />
            </form>
          </div>  
        </div>
        {/* <WeatherNow /> */}
        <div className="WeatherNow">
        <div className="row">
          <ul>
            <UpdatedDate newDate={weatherData.date} />
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <img src={weatherData.icon} alt={weatherData.description}/>
            <span className="temperature">{weatherData.temperature}</span>
            <span className="unit">ºC | ºF</span>
          </div>
          <div className="col-6">
            <ul>
              <li><strong className="text-capitalize">{weatherData.description}</strong></li>  
              <li>Humidity: {weatherData.humidity}%</li>  
              <li>Wind speed: {weatherData.windSpeed} km/h</li>  
            </ul>          
          </div>
        </div>
        </div>  
      </div>
    );
  } else {
    handleSubmit();
    return "Loading..."
  }
}