import React from "react";
import "./Weather.css"

export default function Weather(params) {
    return(
     <div className="Weather">
      <div className="row">
        <div className="col-3">
          Lisbon
          <ul>
            <li>Thursday, 12:50</li>
            <li>5, November</li>
          </ul>
        </div>
        <div className="col-9">
          <form>
            <input type="search" placeholder="Enter city name"/>
            <input type="submit" value="Seach"/>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          14ºC
        </div>
        <div className="col-6">
          <ul>
            <li>Clouds</li>  
            <li>Humidity: 67 %</li>  
            <li>Wind speed: 6 km/h</li>  
          </ul>          
        </div>
      </div>
     </div>
    )
}