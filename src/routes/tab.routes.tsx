import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Home } from '../screens/Home';

import { NewPassword } from '../screens/NewPassword';
import { useTheme } from '../hooks/useTheme';
import { theme as globalTheme } from '../global/styles/themes';

const { Navigator, Screen } = createBottomTabNavigator();

export default function TabRoutes() {
  const { theme } = useTheme();

  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: theme.text,
        inactiveTintColor: theme.text,
        style: {
          height: 75,
          paddingTop: 13,
          paddingBottom: 13,
          backgroundColor: theme.tabBackground,
          borderTopColor: theme.tabBackground
        },
        labelStyle: {
          fontFamily: globalTheme.fonts.text400,
          color: theme.text
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