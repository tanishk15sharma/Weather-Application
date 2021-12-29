import React, { useState, useEffect } from "react";
import "./style/style.css";

const WeatherHandler = () => {
  return (
    <div>
      <div className="container-div">
        <div className="input-div">
          <input type="search" placeholder="search" className="input" />
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
