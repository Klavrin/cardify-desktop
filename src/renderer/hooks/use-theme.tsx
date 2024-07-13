import { useContext } from 'react';
import { ThemeContext } from '../components/theme-provider';

export const useTheme = () => {
  const { theme, setTheme, toggleTheme } = useContext(ThemeContext);
  return { theme, setTheme, toggleTheme };
};
