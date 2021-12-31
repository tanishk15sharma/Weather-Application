import React, { useState, useEffect } from "react";
import GetBackgroundImg from "./backgroung";
import "./style/style.css";
import ImageHandler from "./weather-image";

const WeatherHandler = () => {
  const [city, setCity] = useState({});
  const [search, setSearch] = useState("indore");

  // weatherAPI = api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  // api KEY = 634412f226d82125f33f4e7d7dde8b84

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=634412f226d82125f33f4e7d7dde8b84`;

      const response = await fetch(url);
      //   console.log(response);
      const convertJson = await response.json();
      // console.log(convertJson);
      setCity(convertJson);
    };
    fetchApi();
  }, [search]);

  return (
    <div>
      <GetBackgroundImg search={search} />
      <div className="container-div">
        {/* {isLoading ? "loading" : <ImageHandler climate={city} />} */}

        <div className="input-div">
          <input
            type="text"
            placeholder="search"
            className="input"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <i className="fas fa-search search-icon"></i>
        </div>

        {typeof city.main != "undefined" ? (
          <div className="weather-div">
            <ImageHandler climate={city} />

            <div className="weather-info">
              <div className="place-name">
                {city.name},{city.sys.country}
              </div>
              <div className="date">22 wednesday , 2022</div>

              <div className="temp"> {Math.round(city.main.temp)}°C </div>
              <div className="cloud">
                <i className="fas fa-cloud cloud-icon"></i>
                {city.weather[0].main}
              </div>

              <div className="precip">Humidity: {city.main.humidity}%</div>
              <div className="wind">Wind: {city.wind.speed}mph</div>
            </div>
            <div className="wave"></div>
          </div>
        ) : (
          <div className="error-div">
            <i className="fas fa-exclamation-triangle error-icon"></i>
            <div className="nodata">Data Not Found</div>
          </div>
        )}
      </div>
      <div className="footer">
        <a href="https://github.com/tanishk15sharma">
          <i class="fab fa-github-square github-icon"></i>
        </a>
        <a href="https://twitter.com/_tanishksharma">
          <i class="fab fa-twitter-square twitter-icon"></i>
        </a>
        <a href="https://www.linkedin.com/in/tanishk-sharma-98225a217/">
          <i class="fab fa-linkedin link-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default WeatherHandler;
