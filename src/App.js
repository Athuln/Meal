import React from "react";
import "./css/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Components/Home";
import BestFood from "./Components/BestFood";
import MeetTheChefs from "./Components/MeetTheChefs";
import Restaurant from "./Components/Restaurant";
import Header from "./Components/Header";
import ImageComponent from "./Components/ImageComponent";
import AfterScrollHeader from "./Components/ScrollHeader";
function App() {
  AOS.init({ offset: 250, delay: 150 });
  return (
    <div className="bg-light">
      <div className="site-wrap">
        <AfterScrollHeader />
        <Header />
        <div className="main-wrap " id="section-home">
          <Home />
          <BestFood />
          <Restaurant />
          <ImageComponent />
          <MeetTheChefs />
        </div>
      </div>
    </div>
  );
}

export default App;
