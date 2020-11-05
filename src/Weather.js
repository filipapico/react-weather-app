import React, { useState } from "react";
import axios from "axios";
import UpdatedDate from "./UpdatedDate"

import "./Weather.css";

export default function Weather() {
  let [city, setCity] = useState(null)
  let [date, setDate] = useState(null)
  let [temperature, setTemperature] = useState(null)
  let [description, setDescription] = useState(null)
  let [humidity, setHumidity] = useState(null)
  let [windSpeed, setWindSpeed] = useState(null)
  
  function updateCity(event) {
    event.preventDefault()
    setCity(event.target.value)
  }

  function displayWeather(response) {
    setTemperature(Math.round(response.data.main.temp))
    setDescription(response.data.weather[0].description)
    setHumidity(response.data.main.humidity)
    setWindSpeed(Math.round(response.data.wind.speed))
    setDate(response.data.dt * 1000)
  }

  function handleSubmit(event) {
    event.preventDefault()
    let apiKey = "f2741c2d8db0d12b06b1e9b5fcfef6a1"
    let units = "metric"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`
    axios.get(apiUrl).then(displayWeather)  
  }

  return(
    <div className="Weather">
     <div className="row">
       <div className="col-6">
         <h1 className="text-capitalize"><strong>{city}</strong></h1>
         <ul>
           <UpdatedDate newDate={date} />
         </ul>
       </div>
       <div className="col-6">
         <form onSubmit={handleSubmit} className="form-inline">
           <input onChange={updateCity} className="form-control mr-2" type="search" placeholder="Enter city name" autoFocus="on"/>
           <input className="btn btn-success" type="submit" value="Search" />
         </form>
       </div>
     </div>
     <div className="row">
       <div className="col-6">
         <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="partly cloudy"/>
         <span className="temperature">{temperature}</span>
         <span className="unit">ºC | ºF</span>
       </div>
       <div className="col-6">
         <ul>
           <li><strong className="text-capitalize">{description}</strong></li>  
           <li>Humidity: {humidity}%</li>  
           <li>Wind speed: {windSpeed} km/h</li>  
         </ul>          
       </div>
     </div>
    </div>
    )
}