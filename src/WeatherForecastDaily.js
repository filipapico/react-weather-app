import React from "react";
import UpdatedForecastDate from "./UpdatedForecastDate";

export default function WeatherForecastDaily(props) {
  return (
    <div>
      <ul>
        <li><UpdatedForecastDate newDate={props.data.date} /></li>
        <li><img src={props.data.icon} alt=""/></li>
        <li className="maximum">Max:{props.data.maximumTemperature}ºC</li>
        <li className="minimum">Min:{props.data.minimumTemperature}ºC</li>
      </ul>
    </div>
  )
}