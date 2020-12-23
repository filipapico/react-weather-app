import React from "react";
import UpdatedDate from "./UpdatedDate"

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
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="partly cloudy"/>
            <span className="temperature">{props.data.temperature}</span>
            <span className="unit">ºC | ºF</span>
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