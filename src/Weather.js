import React from "react";
import "./Weather.css"

export default function Weather() {
    return(
     <div className="Weather">
      <div className="row">
        <div className="col-6">
          <h1><strong>Lisbon</strong></h1>
          <ul>
            <li>Thursday, 12:50</li>
            <li>5, November</li>
          </ul>
        </div>
        <div className="col-6">
          <form className="form-inline">
            <input className="form-control mr-2" type="search" placeholder="Enter city name" autoFocus="on"/>
            <input className="btn btn-success" type="submit" value="Seach" />
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="partly cloudy"/>
          <span className="temperature">14</span>
          <span className="unit">ºC | ºF</span>
        </div>
        <div className="col-6">
          <ul>
            <li><strong>Clouds</strong></li>  
            <li>Humidity: 67 %</li>  
            <li>Wind speed: 6 km/h</li>  
          </ul>          
        </div>
      </div>
     </div>
    )
}