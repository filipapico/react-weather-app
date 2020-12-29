import React from "react";
import UpdatedForecastDate from "./UpdatedForecastDate";
import "./WeatherForecastDaily.css";

export default function WeatherForecastDaily(props) {
  return (
    <div className="WeatherForecastDaily">
      <div className="col">
        <ul>
          <li><UpdatedForecastDate newDate={props.fdata.dt*1000} /></li>
          <li><img src={`http://openweathermap.org/img/wn/${props.fdata.weather[0].icon}.png`} alt=""/></li>
          <li className="temperature">
            <span className="minimum">{Math.round(props.fdata.temp.min)}</span>
            <span> - </span>
            <span className="maximum">{Math.round(props.fdata.temp.max)}ºC</span>
          </li>
        </ul>
      </div>
    </div>
  )
}