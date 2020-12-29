import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDaily from "./WeatherForecastDaily";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false)
  let [forecast, setForecast] = useState(null);

  function displayWeatherForecast(response) {
    setForecast({
      daily: response.data.daily,
      latitude: response.data.lat,
    })
    console.log(response);
    setLoaded(true);
  }

  if (loaded && forecast.latitude === props.latitude) {  
    return (
      <div className="WeatherForecast row">
        <WeatherForecastDaily fdata={forecast.daily[1]}/>
        <WeatherForecastDaily fdata={forecast.daily[2]}/>
        <WeatherForecastDaily fdata={forecast.daily[3]}/>
        <WeatherForecastDaily fdata={forecast.daily[4]}/>
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