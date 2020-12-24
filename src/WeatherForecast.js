import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDaily from "./WeatherForecastDaily";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false)
  let [forecast, setForecast] = useState(null);

  function displayWeatherForecast(response) {
    setForecast({
      date: response.data.daily[0].dt*1000,
      icon: `http://openweathermap.org/img/wn/${response.data.daily[0].weather[0].icon}@2x.png`,
      minimumTemperature: response.data.daily[0].temp.min,
      maximumTemperature: response.data.daily[0].temp.max,
      latitude: response.data.lat,
    })
    setLoaded(true);
  }

  if (loaded && forecast.latitude === props.latitude) {  
    return (
      <div className="WeatherForecast">
        <WeatherForecastDaily data={forecast}/>
      </div>
    )
  } else {
    let apiKey = "95b79d65e0e57550f167b80420d22ce8";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeatherForecast);
    return "Loading..."
  }
}