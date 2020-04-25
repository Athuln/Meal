import React from "react";
import img1 from "../images/chef_1.jpg";
import img2 from "../images/chef_2.jpg";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
const MeetTheChefs = () => {
  return (
    <div className="section bg-white" id="Chefs" data-aos={"fade-up"}>
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-12 section-heading text-center">
            <h2 className="heading mb-5">Meet The Chefs</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 pr-md-5 text-center mb-5">
            <div className="ftco-38">
              <div className="ftco-38-img">
                <div className="ftco-38-header">
                  <img src={img1} alt="Image"></img>
                  <h3 className="ftco-38-heading">Daniel Graham</h3>
                  <p className="ftco-38-subheading">Master Chef</p>
                </div>
                <div className="ftco-38-body">
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                  </p>
                  <p>
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics, a large language ocean. It is a paradisematic
                    country.
                  </p>
                  <p>
                    <a href="#" className="p-2 social-icons">
                      <span className="fa fa-facebook"></span>
                    </a>
                    <a href="#" className="p-2 social-icons">
                      <span className="fa fa-twitter"></span>
                    </a>
                    <a href="#" className="p-2 social-icons">
                      <span className="fa fa-instagram"></span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 pl-md-5 text-center mb-5">
            <div className="ftco-38">
              <div className="ftco-38-img">
                <div className="ftco-38-header">
                  <img src={img2} alt="Image"></img>
                  <h3 className="ftco-38-heading">Nick Browning</h3>
                  <p className="ftco-38-subheading">Master Chef</p>
                </div>
                <div className="ftco-38-body">
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                  </p>
                  <p>
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics, a large language ocean. It is a paradisematic
                    country.
                  </p>
                  <p>
                    <a href="#" className="p-2 social-icons">
                      <span className="fa fa-facebook"></span>
                    </a>
                    <a href="#" className="p-2 social-icons">
                      <span className="fa fa-twitter"></span>
                    </a>
                    <a href="#" className="p-2 social-icons">
                      <span className="fa fa-instagram"></span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheChefs;
