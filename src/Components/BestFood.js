import React from "react";
import "../css/style.css";
import img1 from "../images/img_1.jpg";
import img2 from "../images/img_2.jpg";
import img3 from "../images/img_3.jpg";
const BestFood = () => {
  return (
    <div className="section" data-aos={"fade-up"}>
      <div className="container">
        <div className="row section-heading justify-content-center mb-5">
          <div className="col-md-8 text-center">
            <h2 className="heading mb-3">Find your best food</h2>
            <p className="sub-heading mb-5">
              Free Website Template For Restaurants Made by Colorlib
            </p>
          </div>
        </div>
        <div className="row">
          <div className="ftco-46">
            <div className="ftco-46-row d-flex flex-column flex-lg-row">
              <div
                className="ftco-46-image"
                style={{ backgroundImage: `url(${img1})` }}
              ></div>
              <div className="ftco-46-text ftco-46-arrow-left">
                <h4 className="ftco-46-subheading">Vegies</h4>
                <h3 className="ftco-46-heading">Beef Empanadas</h3>
                <p className="mb-5">
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
                <p>
                  <a href="#" className="btn-link">
                    Learn More{" "}
                    <span className="ion-android-arrow-forward"></span>
                  </a>
                </p>
              </div>
              <div
                className="ftco-46-image"
                style={{ backgroundImage: `url(${img2})` }}
              ></div>
            </div>

            <div className="ftco-46-row d-flex flex-column flex-lg-row">
              <div className="ftco-46-text ftco-46-arrow-right">
                <h4 className="ftco-46-subheading">Food</h4>
                <h3 className="ftco-46-heading">
                  Buttermilk Chicken Jibaritos
                </h3>
                <p className="mb-5">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
                <p>
                  <a href="#" className="btn-link">
                    Learn More{" "}
                    <span className="ion-android-arrow-forward"></span>
                  </a>
                </p>
              </div>
              <div
                className="ftco-46-image"
                style={{ backgroundImage: `url(${img3})` }}
              ></div>
              <div className="ftco-46-text ftco-46-arrow-up">
                <h4 className="ftco-46-subheading">Food</h4>
                <h3 className="ftco-46-heading">
                  Chicken Chimichurri Croquettes
                </h3>
                <p className="mb-5">
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic life.
                </p>
                <p>
                  <a href="#" className="btn-link">
                    Learn More{" "}
                    <span className="ion-android-arrow-forward"></span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestFood;
