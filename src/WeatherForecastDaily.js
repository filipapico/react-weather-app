import React from "react";
import UpdatedForecastDate from "./UpdatedForecastDate";
import "./WeatherForecastDaily.css";

export default function WeatherForecastDaily(props) {
  return (
    <div className="WeatherForecastDaily">
      <div className="col-2">
        <ul>
          <li><UpdatedForecastDate newDate={props.fdata.dt*1000} /></li>
          <li><img src={`http://openweathermap.org/img/wn/${props.fdata.weather[0].icon}@2x.png`} alt=""/></li>
          <li>
            <span className="minimum">{Math.round(props.fdata.temp.min)}</span>
            <span className="maximum">{Math.round(props.fdata.temp.max)}ºC</span>
          </li>
        </ul>
      </div>
    </div>
  )
}