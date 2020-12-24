import React, { useState } from "react";
import axios from "axios";
import UpdatedForecastDate from "./UpdatedForecastDate";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [forecast, setForecast] = useState({ ready: false });

  function displayWeatherForecast(response) {
    setForecast({
      ready: true,
      // date: response.data.daily[0].dt * 1000,
      icon: `http://openweathermap.org/img/wn/${response.data.daily[0].weather[0].icon}@2x.png`,
      minimumTemperature: response.data.daily[0].temp.min,
      maximumTemperature: response.data.daily[0].temp.max,
    })
  }

  if (forecast.ready && forecast.latitude === props.latitude) {  
    return (
      <div className="WeatherForecast">
        <p>BLEACH</p>
        {/* <ul> */}
          {/* <li><UpdatedForecastDate newDate={forecast.date} /></li> */}
          {/* <li><img src={forecast.icon} /></li>
          <li className="maximum">Max:{forecast.maximumTemperature}</li>
          <li className="minimum">Min:{forecast.minimumTemperature}</li> */}
        {/* </ul> */}
      </div>
    )
  } else {
    let apiKey = "f2741c2d8db0d12b06b1e9b5fcfef6a1";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeatherForecast);
    console.log(apiUrl)
    return "Loading..."
  }
}