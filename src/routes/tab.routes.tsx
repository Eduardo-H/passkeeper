import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import { Home } from '../screens/Home';

import { theme } from '../global/styles/themes';

const { Navigator, Screen } = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.text,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: Platform.OS === 'ios' ? 84 : 75
        }
      }}
    >
      <Screen
        name="MyPasswords"
        component={Home}
        options={{
          title: 'My Passwords',
          tabBarIcon: (({ size, color }) => (
            <Feather 
              name="lock" 
              size={size} 
              color={color} 
            />
          ))
        }}
      />

      <Screen
        name="NewPassword"
        component={Home}
        options={{
          title: 'New Password',
          tabBarIcon: (({ size, color }) => (
            <Feather 
              name="plus-circle" 
              size={size} 
              color={color} 
            />
          ))
        }}
      />
    </Navigator>
  );
}