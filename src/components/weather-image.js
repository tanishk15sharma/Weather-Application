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
    const temp = climate.main?.temp;
    // if (climate.main) {
    //   console.log(climate.main.temp);  we can use this to deep dive into climate.main.temp.
    // }
    // console.log(climate.main && climate.main.temp); we can use this too to deep dive.
    // console.log(climate.main?.temp); //this is know as optional chaining used to deep dive into objects.
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
