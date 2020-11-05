import Weather from "./Weather"

import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer><small>Coded by <a href="https://www.linkedin.com/in/filipapico/" target="_blank">Filipa Pico</a>, <a href="https://github.com/filipapico/react-weather-app" target="_blank">open-sourced on GitHub</a>
        {" "}and <a href="https://wonderful-edison-2f8028.netlify.app/" target="_blank">hosted on Netlify</a></small>
        </footer>
      </div>
    </div>
  );
}


