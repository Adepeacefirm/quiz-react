import React, { useContext, useEffect, useState } from "react";
import "../componentStyles/HtmlThoggle.css";
import { assets } from "../assets/assets";
import { DarkModeContext } from "../context/DarkMdeContext";

const CssThoggle = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);
  return (
    <div>
      <div className="navbar">
        <div className="logo-icon">
          <img src={assets.icon_css} alt="" />
          <p>CSS</p>
        </div>
        <div
          className="toggle-div"
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          <img
            src={darkMode ? assets.icon_sun_light : assets.icon_sun_dark}
            alt=""
          />
          <div className="toggle-bar-div">
            <div className="toggle-thumb toggle-thumb-dark"></div>
          </div>
          <img
            src={darkMode ? assets.icon_moon_light : assets.icon_moon_dark}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CssThoggle;
