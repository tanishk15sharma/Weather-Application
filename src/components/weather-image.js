import React from "react";
import windy from "./style/windy.png";

import haze from "./style/haze.png";
import rain from "./style/rain.png";

import cloudy from "./style/cloudy.png";
import sunny from "./style/sunny.png";
import coldest from "./style/coldest.png";
import foggy from "./style/fog.png";

const ImageHandler = ({ climate }) => {
  const conditionalImage = () => {
    console.log(climate.main.temp);
    // if (climate.main.temp > 24) {
    //   return <img src={sunny} className="windy-icon" />;
    // } else {
    //   return <img src={rain} className="windy-icon" />;
    // }
  };

  return (
    <div>
      {console.log(climate)}
      {/* <img src={windy} className="windy-icon" /> */}
      {conditionalImage()}

      {/* <img src={sunny} className="windy-icon" /> */}

      {/* <img src={haze} className="windy-icon" /> */}
      {/* <img src={rain} className="windy-icon" /> */}

      {/* <img src={cloudy} className="windy-icon" /> */}
      {/* <img src={coldest} className="windy-icon" /> */}
      {/* <img src={foggy} className="windy-icon" /> */}
    </div>
  );
};

export default ImageHandler;
