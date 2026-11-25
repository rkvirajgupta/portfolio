import React, { createContext, useState } from "react";

// React 19 no longer checks propTypes, so the prop-types declaration was removed.
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themename, setthemename] = useState("light");
  const toggeltheme = () => {
    themename === "light" ? setthemename("dark") : setthemename("light");
  };

  return (
    <ThemeContext.Provider value={[{ themename, toggeltheme }]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
