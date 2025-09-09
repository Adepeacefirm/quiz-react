import React, { useEffect, useState } from "react";
import "../componentStyles/HtmlQuestions.css";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const HtmlQuestions = () => {
  const labels = ["A", "B", "C", "D"];
  const [data, setData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(false);
  const [answered, setAnswered] = useState(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await fetch("/data.json");
      if (!res.ok) throw new Error("Response not ok");
      const data = await res.json();
      setData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    localStorage.removeItem("score");
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  if (!data || !data.questions) return <p>Loading questions...</p>;

  const currentQuestion = data.questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  const progress = ((currentQuestionIndex + 1) / data.questions.length) * 100;

  const handleSelect = (option) => {
    if (answered) return; 
    setSelected(option);
    setError(false);
    setAnswered(true);

    if (option === currentQuestion.answer) {
      setScore((s) => s + 1);
    }
  };
  const handleNext = () => {
    if (!selected) {
      setError(true);
      return;
    }

    if (currentQuestionIndex + 1 < data.questions.length) {
      setCurrentQuestionIndex((i) => i + 1);
      setSelected(null);
      setAnswered(false);
      setError(false);
    } else {
      localStorage.setItem("score", score);
      navigate("/htmlresult");
    }
  };

  return (
    <div>
      <main className="main">
        <header className="header">
          <p id="question-number-tag" className="question-display">
            Question <span id="question-number-count">{questionNo}</span> of{" "}
            {data.questions.length}
          </p>
          <h1 id="question-element">{currentQuestion.question}</h1>
          <div className="progress-bar-div">
            <div
              className="progress-bar"
              id="progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </header>

        <section className="options-section">
          <div className="options-div" id="options-div">
            {currentQuestion.options.map((option, idx) => {
              const isCorrect = option === currentQuestion.answer;
              const isSelected = option === selected;
              const btnClass = [
                "options",
                answered && isCorrect ? "correct" : "",
                answered && isSelected && !isCorrect ? "wrong" : "",
              ].join(" ");

              return (
                <button
                  key={idx}
                  className={btnClass}
                  onClick={() => handleSelect(option)}
                  disabled={answered}
                  aria-pressed={isSelected}
                >
                  <span className="option-labels">{labels[idx]}</span>
                  <span className="options-text">{option}</span>

                  {answered && isCorrect && (
                    <img
                      src={assets.icon_correct}
                      alt="correct"
                      className="option-icon"
                    />
                  )}
                  {answered && isSelected && !isCorrect && (
                    <img
                      src={assets.icon_incorrect}
                      alt="incorrect"
                      className="option-icon"
                    />
                  )}
                </button>
              );
            })}
          </div>
          <div className="submit-div">
            <button id="submit-btn" className="submit-btn" onClick={handleNext}>
              {currentQuestionIndex + 1 === data.questions.length
                ? "Submit"
                : "Next Question"}
            </button>
            {error && (
              <div className="error-div">
                <img src={assets.icon_error} alt="error icon" />
                <span className="error-msg">Please select an answer</span>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HtmlQuestions;
