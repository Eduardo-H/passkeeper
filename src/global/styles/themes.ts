import { Appearance } from 'react-native';

const colorScheme = Appearance.getColorScheme();

let colors = {};

if (colorScheme === 'light') {
  colors = {
    primary: '#44EE9D',
    secondary: '#F3F3F3',
    background: '#FBFBFB',
    text: '#2C2C2C',
    white: '#FFFFFF'
  };
} else {
  colors = {
    primary: '#44EE9D',
    secondary: '#2A3650',
    background: '#262D3B',
    text: '#FFFFFF',
    white: '#FFFFFF'
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