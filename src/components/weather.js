import React, { useState, useEffect } from "react";
import "./style/style.css";

const WeatherHandler = () => {
  return (
    <div>
      <div className="container-div">
        <div className="input-div">
          <input type="search" placeholder="search" className="input" />
        </div>

        <div className="weather-div">
          <div className="weather-info">
            <div className="place-name">indore,MP</div>
            <h3 className="date">22 wednesday , 2022</h3>

            <h1 className="temp">25c</h1>
            <h2 className="cloud">sunny</h2>
            <h2 className="precip">precipitation:20%</h2>
            <h2 className="wind">wind:3mph</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherHandler;
