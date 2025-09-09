import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Html from "./Pages/htmlQuestions/Html";
import HtmlResult from "./Pages/htmlQuestions/HtmlResult";
import Css from "./Pages/cssQuestions/Css";
import Javascript from "./Pages/jsQuestions/Javascript";
import CssResult from "./Pages/cssQuestions/CssResult";
import JavascriptResult from "./Pages/jsQuestions/JavascriptResult";
import Accessibility from "./Pages/accessQuestions/Accessibility";
import AccessibilityResult from "./Pages/accessQuestions/AccessibilityResult";
import DarkModeContextProvider from "./context/DarkMdeContext";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <DarkModeContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/htmlquestions" element={<Html />} />
            <Route path="/htmlresult" element={<HtmlResult />} />
            <Route path="/cssquestions" element={<Css />} />
            <Route path="/cssresult" element={<CssResult />} />
            <Route path="/jsquestions" element={<Javascript />} />
            <Route path="/jsresult" element={<JavascriptResult />} />
            <Route path="/accessquestions" element={<Accessibility />} />
            <Route path="/accessresult" element={<AccessibilityResult />} />
          </Routes>
        </DarkModeContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
