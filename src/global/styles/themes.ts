import { Appearance } from 'react-native';

interface ColorProps {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  input: string;
  white: string;
  invalid: string;
}

const colorScheme = Appearance.getColorScheme();

let colors = {} as ColorProps;

if (colorScheme === 'light') {
  colors = {
    primary: '#44EE9D',
    secondary: '#F3F3F3',
    background: '#FBFBFB',
    text: '#2C2C2C',
    input: '#FFFFFF',
    white: '#FFFFFF',
    invalid: '#FF3F3F'
  };
} else {
  colors = {
    primary: '#44EE9D',
    secondary: '#2A3650',
    background: '#262D3B',
    text: '#FFFFFF',
    input: '#2A3650',
    white: '#FFFFFF',
    invalid: '#FF3F3F'
  };
}

export const theme = {
  colors,
  fonts: {
    text400: 'Poppins_400Regular',
    text500: 'Poppins_500Medium',
    text600: 'Poppins_600SemiBold'
  }
}