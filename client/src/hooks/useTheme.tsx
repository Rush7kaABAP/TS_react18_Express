import { useCallback, useState } from 'react';

export const useTheme = (initialTheme = 'default') => {
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = useCallback(
    () =>
      setTheme((currentTheme) =>
        currentTheme === 'default' ? 'dark' : 'default'
      ),
    []
  );

  return {
    theme,
    toggleTheme,
  };
};
