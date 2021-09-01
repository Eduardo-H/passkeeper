import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
          tabBarIcon: (({ focused, size, color }) => (
            <MaterialCommunityIcons 
              name={ focused ? "lock" : "lock-outline" } 
              size={size} 
              color={color} 
            />
          )),
        }}
      />

      <Screen
        name="NewPassword"
        component={NewPassword}
        initialParams={{ currentPassword: null }}
        options={{
          title: 'New Password',
          tabBarIcon: (({ focused, size, color }) => (
            <MaterialCommunityIcons 
              name={ focused ? "plus-circle" : "plus-circle-outline" }
              size={size} 
              color={color}
            />
          ))
        }}
      />
    </Navigator>
  );
}