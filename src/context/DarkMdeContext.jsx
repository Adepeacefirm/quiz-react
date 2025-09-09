import React, { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const value = {
    darkMode,
    setDarkMode,
  };

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);
  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
