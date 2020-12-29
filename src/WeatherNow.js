import React from "react";
import UpdatedDate from "./UpdatedDate"
import WeatherTemperature from "./WeatherTemperature"

import "./WeatherNow.css"

export default function WeatherNow(props) {
  return (
    <div className="WeatherNow">
      <div className="row">
        <ul>
          <UpdatedDate newDate={props.data.date} />
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <img src={props.data.icon} alt={props.data.description}/>
          <WeatherTemperature temperature={props.data.temperature}/>
        </div>
        <div className="col-6">
          <ul>
            <li><strong className="text-capitalize">{props.data.description}</strong></li>  
            <li>Humidity: {props.data.humidity}%</li>  
            <li>Wind speed: {props.data.windSpeed} km/h</li>  
          </ul>          
        </div>
      </div>
    </div>
  )
}