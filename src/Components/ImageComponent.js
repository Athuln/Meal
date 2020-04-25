import React from "react";
import "../css/style.css";
import img1 from "../images/bg_hero.png";
const ImageComponent = () => {
  return (
    <div className="section bg-white pt-2 pb-2 text-center" data-aos={"fade"}>
      <p>
        <img src={img1} alt="picture" className="img-fluid"></img>
      </p>
    </div>
  );
};

export default ImageComponent;
