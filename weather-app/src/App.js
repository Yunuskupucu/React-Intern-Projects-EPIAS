import React, { useState } from "react";
import axios from "axios";
import { createContext } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [theme, setTheme] = useState("light");

  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&lang=tr`;

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
    console.log(theme);
  };

  const mphToKmh = (mph) => {
    return (mph * 1.6093).toFixed(0);
  };

  const kelvinToCelcius = (temp) => {
    return (temp - 273).toFixed(0);
  };

  const toUpperCaseString = (str) => {
    return str ? str.toUpperCase() : "";
  };

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          if (error.response && error.response.status === 404)
            alert("Geçersiz şehir adı, lütfen doğru bir şehir adı giriniz.");
        });
      setLocation("");
    }
  };

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div
          className={`bg-section ${theme === "light" ? "is-light" : "is-dark"}`}
        ></div>
        <div className="search">
          <input
            type="text"
            value={location}
            onChange={handleChange}
            onKeyDown={searchLocation}
            placeholder="Ülke / Şehir Giriniz"
          />
        </div>
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{toUpperCaseString(data.name)}</p>
            </div>
            <div className="temp">
              {data.main ? <h1>{kelvinToCelcius(data.main.temp)}°C</h1> : null}
            </div>
            <div className="description">
              {data.weather && data.weather[0] ? (
                <div>
                  <img
                    src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                    alt="Weather Icon"
                  />
                  <p>{toUpperCaseString(data.weather[0].description)}</p>
                </div>
              ) : null}
            </div>
          </div>
          <div className="bottom">
            <div className="feels">
              <h3>Hissedilen Sıcaklık</h3>
              {data.main ? (
                <p className="bold">
                  {kelvinToCelcius(data.main.feels_like)}°C
                </p>
              ) : null}
            </div>
            <div className="humidity">
              <h3>Nem Oranı</h3>
              {data.main ? <p className="bold">%{data.main.humidity}</p> : null}
            </div>
            <div className="wind">
              <h3>Rüzgar Şiddeti</h3>
              {data.wind ? (
                <p className="bold">{mphToKmh(data.wind.speed)} km/h</p>
              ) : null}
            </div>
          </div>
        </div>
        <div className="switch">
          <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch
            onChange={toggleTheme}
            checked={theme === "light"}
            uncheckedIcon={<span>🌙</span>}
            checkedIcon={<span>☀️</span>}
            onColor="#abaaaa"
          />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
