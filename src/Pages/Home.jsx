import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import "../index.css";
import "./Responsive.css";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { DarkModeContext } from "../context/DarkMdeContext";

const Home = () => {
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    localStorage.removeItem("score");
  }, []);
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);
  return (
    <div id="return-div">
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
          <div className="toggle-thumb"></div>
        </div>
        <img
          src={darkMode ? assets.icon_moon_light : assets.icon_moon_dark}
          alt=""
        />
      </div>
      <main className="main" id="main">
        <header className="header">
          <p>
            Welcome to the <span id="frontend">Frontend Quiz!</span>
          </p>
          <span id="pick">Pick a subject to get started.</span>
        </header>

        <section className="subjects-section">
          <div
            onClick={() => {
              navigate("/htmlquestions");
            }}
            className="subjects html"
            data-subject="HTML"
          >
            <img src={assets.icon_html} alt="" />
            <p>HTML</p>
          </div>
          <div
            onClick={() => {
              navigate("/cssquestions");
            }}
            className="subjects css"
            data-subject="CSS"
          >
            <img src={assets.icon_css} alt="" />
            <p>CSS</p>
          </div>
          <div
            onClick={() => {
              navigate("/jsquestions");
            }}
            className="subjects javascript"
            data-subject="JavaScript"
          >
            <img src={assets.icon_js} alt="" />
            <p>JavaScript</p>
          </div>
          <div
            onClick={() => {
              navigate("/accessquestions");
            }}
            className="subjects accessibility"
            data-subject="Accessibility"
          >
            <img src={assets.icon_accessibility} alt="" />
            <p>Accessibility</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
