import React, { useState, useEffect } from "react";
import "./style/style.css";

const WeatherHandler = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("delhi");

  // weatherAPI = api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  // api KEY = 634412f226d82125f33f4e7d7dde8b84

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=634412f226d82125f33f4e7d7dde8b84`;

      const response = await fetch(url);
      //   console.log(response);
      const convertJson = await response.json();
      console.log(convertJson);
      setCity(convertJson);
    };
    fetchApi();
  }, []);

  return (
    <div>
      <div className="container-div">
        <div className="input-div">
          <input
            type="search"
            placeholder="search"
            className="input"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          {/* <i class="fas fa-search"></i> */}
        </div>

        <div className="weather-div">
          <div className="weather-info">
            <div className="place-name">indore,MP</div>
            <div className="date">22 wednesday , 2022</div>

            <div className="temp">25°c</div>
            <div className="cloud">
              <i className="fas fa-cloud cloud-icon"></i>
              sunny
            </div>

            <div className="precip">Precipitation: 20%</div>
            <div className="wind">Wind: 3mph</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherHandler;
