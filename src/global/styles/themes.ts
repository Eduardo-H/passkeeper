import { Appearance } from 'react-native';

interface ColorProps {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  contrastText: string;
  label: string;
  input: string;
  white: string;
  invalid: string;
  tabBackground: string;
}

const colorScheme = Appearance.getColorScheme();

let colors = {} as ColorProps;

if (colorScheme === 'light') {
  colors = {
    primary: '#44EE9D',
    secondary: '#F3F3F3',
    background: '#FBFBFB',
    text: '#2C2C2C',
    contrastText: '#2C2C2C',
    label: '#737373',
    input: '#FFFFFF',
    white: '#FFFFFF',
    invalid: '#FF3F3F',
    tabBackground: '#FFFFFF'
  };
} else {
  colors = {
    primary: '#44EE9D',
    secondary: '#2A3650',
    background: '#262D3B',
    text: '#FFFFFF',
    contrastText: '#2C2C2C',
    label: '#CCCCCC',
    input: '#2A3650',
    white: '#FFFFFF',
    invalid: '#FF3F3F',
    tabBackground: '#1F2531'
  };
}

export const theme = {
  colors,
  light: {
    theme_type: 'light',

    primary: '#44EE9D',
    secondary: '#F3F3F3',
    background: '#FBFBFB',
    text: '#2C2C2C',
    contrastText: '#2C2C2C',
    label: '#737373',
    input: '#FFFFFF',
    inputBorder: '#F3F3F3',
    white: '#FFFFFF',
    invalid: '#FF3F3F',
    tabBackground: '#FFFFFF'
  },
  dark: {
    theme_type: 'dark',

    primary: '#44EE9D',
    secondary: '#2A3650',
    background: '#262D3B',
    text: '#FFFFFF',
    contrastText: '#2C2C2C',
    label: '#CCCCCC',
    input: '#2A3650',
    inputBorder: '#334363',
    white: '#FFFFFF',
    invalid: '#FF3F3F',
    tabBackground: '#1F2531'
  },
  fonts: {
    text400: 'Poppins_400Regular',
    text500: 'Poppins_500Medium',
    text600: 'Poppins_600SemiBold'
  }
}