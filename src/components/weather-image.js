import React from "react";
import windy from "./style/windy.png";

import haze from "./style/haze.png";
import rain from "./style/rain.png";

import cloudy from "./style/cloudy.png";
import sunny from "./style/sunny.png";
import coldest from "./style/coldest.png";
import foggy from "./style/fog.png";
import gif from "./style/haze.gif";

const ImageHandler = ({ climate }) => {
  const conditionalImage = () => {
    const temp = climate.main?.temp;
    // if (climate.main) {
    //   console.log(climate.main.temp);  we can use this to deep dive into climate.main.temp.
    // }
    // console.log(climate.main && climate.main.temp); we can use this too to deep dive.
    // console.log(climate.main?.temp); //this is know as optional chaining used to deep dive into objects.
    // console.log(temp);

    if (temp > 30) {
      return <img src={sunny} className="weather-img" />;
    }
    if (temp > 20 && temp < 30) {
      return <img src={cloudy} className="weather-img clear-img" />;
    }
    if (temp > 10 && temp < 20) {
      return <img src={gif} className="weather-img gif-style" />;
    }
    if (temp < 10) {
      return <img src={coldest} className="weather-img" />;
    }
  };

  return (
    <div className="images-div">
      {console.log(climate)}

      {conditionalImage()}
    </div>
  );
};

export default ImageHandler;
