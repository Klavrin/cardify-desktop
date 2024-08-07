import { useState, createContext, useContext, ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeContext {
  theme: string;
  setTheme: (newTheme: 'light' | 'dark') => void;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContext>({
  theme: 'light',
  setTheme: () => {},
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setNewTheme] = useState<'light' | 'dark'>('light');

  const setTheme = (newTheme: 'light' | 'dark') => {
    if (newTheme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');

    setNewTheme(newTheme);
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      setNewTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setNewTheme('light');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
