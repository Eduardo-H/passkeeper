import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Greetings } from '../screens/Greetings';
import { Disclaimer } from '../screens/Disclaimer';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'transparent'
        }
      }}
    >
      <Screen
        name="Greetings"
        component={Greetings}
      />

      <Screen
        name="Disclaimer"
        component={Disclaimer}
      />
    </Navigator>
  );
}