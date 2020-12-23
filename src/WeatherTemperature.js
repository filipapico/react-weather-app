import React, { useState } from "react";

export default function WeatherTemperature (props) {
  let [unit, setUnit]=useState("celsius")
  
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit")
  }

  function showCelsius (event) {
    event.preventDefault();
    setUnit("celsius")
  }

  function fahrenheit(event) {
    return Math.round((props.temperature * 9/5) + 32)
  }

  if (unit === "celsius") {
    return (
      <span>
        <span className="temperature">{props.temperature}</span>
        <span className="unit">ºC | <a href="/" onClick={showFahrenheit}>ºF</a></span>
      </span>
    )
  } else {
    return (
      <span>
        <span className="temperature">{fahrenheit()}</span>
        <span className="unit"><a href="/" onClick={showCelsius}>ºC</a> | ºF</span>
      </span>
    )
  }


  
}