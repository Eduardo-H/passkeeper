import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { 
  Poppins_400Regular, 
  Poppins_500Medium, 
  Poppins_600SemiBold 
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

import { Routes } from './src/routes';
import { AuthProvider } from './src/hooks/useAuth';
import { ThemeProvider } from './src/hooks/useTheme';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Poppins_400Regular, 
    Poppins_500Medium,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <ThemeProvider>
          <StatusBar 
            animated
            barStyle={"dark-content"} 
            backgroundColor="transparent"
            translucent
          />

          <Routes />
        </ThemeProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}