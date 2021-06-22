import React, { useState, createContext, useMemo, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [themeMode, setThemeMode] = useState(true);

  const value = useMemo(() => {
    return {
      themeMode,
      setThemeMode,
    };
  }, [themeMode]);

  return <ThemeContext.Provider value={value} {...props} />;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be into ThemeContext provider");
  }
  return context;
};
