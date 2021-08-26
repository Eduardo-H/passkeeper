import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './stack.routes';
import { useAuth } from '../hooks/useAuth';
import AppLoading from 'expo-app-loading';

export function Routes() {
  const { loading } = useAuth();

  if (loading) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}