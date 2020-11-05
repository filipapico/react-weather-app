import React from "react"
import Weather from "./Weather"

import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <small>Coded by
            {""} <a href="https://www.linkedin.com/in/filipapico/" target="_blank" rel="noreferrer">Filipa Pico</a>, 
            {""} <a href="https://github.com/filipapico/react-weather-app" target="_blank" rel="noreferrer">open-sourced on GitHub</a> and
            {""} <a href="https://wonderful-edison-2f8028.netlify.app/" target="_blank" rel="noreferrer">hosted on Netlify</a>
          </small>
        </footer>
      </div>
    </div>
  );
}


