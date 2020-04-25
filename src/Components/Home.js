import React from "react";
import "../css/style.css";
import img from "../images/slider-1.jpg";
const Home = () => {
  return (
    <div className="cover_1 overlay bg-light" id="Home">
      <div
        className="img_bg"
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "50% -25px",
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-10">
              <h2 className="heading mb-5">Welcome to Meal</h2>
              <p>
                <a
                  href="#Chefs"
                  className="smoothscroll btn btn-outline-white px-5 py-3"
                  id="reserveTableId"
                >
                  Reserve A Table
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
