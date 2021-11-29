import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { theme as themes } from '../global/styles/themes';
import { COLLECTION_THEMES } from '../configs/database';

type ThemeProps = typeof themes.dark;

type ThemeContextData = {
  theme: ThemeProps;
  toggleTheme: () => void;
}

type ThemeProviderProps = {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextData);

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeProps>(themes['light']);

  async function toggleTheme() {
    const newTheme = theme.theme_type === 'light' ? 'dark' : 'light';

    setTheme(themes[newTheme]);

    await AsyncStorage.setItem(COLLECTION_THEMES, JSON.stringify(newTheme));
  }

  useEffect(() => {
    async function getTheme() {
      const storage = await AsyncStorage.getItem(COLLECTION_THEMES);

      if (storage) {
        const foundTheme = await JSON.parse(storage);
  
        setTheme(themes[foundTheme]);
      }
    }

    getTheme()
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

function useTheme() {
  const context = useContext(ThemeContext);

  return context;
}

export {
  ThemeProvider,
  useTheme
};