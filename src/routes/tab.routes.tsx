import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import { Home } from '../screens/Home';

import { theme } from '../global/styles/themes';
import { NewPassword } from '../screens/NewPassword';

const { Navigator, Screen } = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.text,
        inactiveTintColor: theme.colors.text,
        style: {
          paddingTop: 13,
          paddingBottom: 13,
          height: 75
        },
        labelStyle: {
          fontFamily: theme.fonts.text400,
          color: theme.colors.text
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
        component={NewPassword}
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