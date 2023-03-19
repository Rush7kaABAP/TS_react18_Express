import React, { useMemo } from 'react';
import { ThemeContext, ThemeContextSetter, TThemeSet, TThemeVal } from '../../contexts/ThemeContext';
import { useTheme } from '../../hooks/useTheme';

interface ContextProps{
    children: any
}

export const ThemeContextProvider: React.FC<ContextProps> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const { theme: buttonTheme, toggleTheme: toggleButtonTheme } = useTheme();

  const setters = useMemo(() => ({ toggleTheme, toggleButtonTheme }), []) as TThemeSet;
  const values: TThemeVal = useMemo(() => ({ theme, buttonTheme }), [theme, buttonTheme]);

  return (
    <ThemeContextSetter.Provider value={setters}>
      <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
    </ThemeContextSetter.Provider>
  );
};
