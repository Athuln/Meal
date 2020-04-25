import React from "react";
const AfterScrollHeader = () => {
  window.onscroll = showHeader;
  function showHeader() {
    if (document.documentElement.scrollTop > 371) {
      // document.getElementById("scrollAwakeId").style.display = "block";
      // document.getElementById("scrollAwakeId").style.transform = "scaleY(93px)";
      document.getElementById("scrollAwakeId").className = "scrollawake2";
      document.getElementById("siteLogoId").style.display = "inline-block";
    } else {
      // document.getElementById("scrollAwakeId").style.display = "none";
      // document.getElementById("scrollAwakeId").style.transform = "scaleY(0px)";
      document.getElementById("scrollAwakeId").className = "scrollawake";
      document.getElementById("siteLogoId").style.display = "none";
    }
  }
  return (
    <div className="scrollawake" id="scrollAwakeId">
      <div className="row align-items-center">
        <div className=""></div>
        <div className="text-center site-logo-wrap">
          <a href="index.html" className="site-logo2" id="siteLogoId">
            M
          </a>
        </div>
      </div>
    </div>
  );
};
export default AfterScrollHeader;
