import React from 'react';
import { useFonts } from 'expo-font';
import { 
  Poppins_400Regular, 
  Poppins_500Medium, 
  Poppins_600SemiBold 
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

import { Routes } from './src/routes';
import { AuthProvider } from './src/hooks/useAuth';

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
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}