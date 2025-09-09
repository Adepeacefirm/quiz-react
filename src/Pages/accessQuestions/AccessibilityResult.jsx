import React, { useEffect, useState } from "react";
import "../../componentStyles/HtmlQuestions.css";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import AccessThoggle from "../../components/AccessThoggle";

const AccessibilityResult = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(null);
  useEffect(() => {
    const savedScore = localStorage.getItem("score");
    if (savedScore) {
      setScore(Number(savedScore));
    }
  }, []);
  return (
    <div>
      <AccessThoggle />
      <main className="result-main">
              <section className="result-header">
                <p>
                  Quiz completed <span className="you-scored">You scored...</span>
                </p>
              </section>
      
              <section className="result-section">
                <div className="result-container">
                  <div className="result-logo-div">
                    <img src={assets.icon_accessibility} alt="" />
                    <p>Accessibility</p>
                  </div>
                  <h2 className="my-score" id="my-score">
                    {score}
                  </h2>
                  <p id="out">out of 10</p>
                </div>
                <button
                  className="submit-btn play-again-btn"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Play Again
                </button>
              </section>
            </main>
    </div>
  );
};

export default AccessibilityResult;
