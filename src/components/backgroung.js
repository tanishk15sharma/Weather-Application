import React, { useState, useEffect } from "react";
import axios from "axios";

const GetBackgroundImg = ({ search }) => {
  const [image, setImage] = useState("");
  useEffect(() => {
    const url = `https://api.unsplash.com/search/photos/?query=${search}&client_id=OQfBERNJKXqahx0DH7d-OwHOtve3wlQa-Z_72ecQhPY`;

    axios.get(url).then((response) => {
      console.log(response.data);
      setImage(
        response.data.results[Math.floor(Math.random() * 5)].urls.regular
      );
      console.log(image);
    });
  }, [search]);

  return (
    <div>
      <img src={image} />
    </div>
  );
};

export default GetBackgroundImg;
