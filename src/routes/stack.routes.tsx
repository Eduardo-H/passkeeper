import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { useAuth } from '../hooks/useAuth';
import { Greetings } from '../screens/Greetings';
import { Disclaimer } from '../screens/Disclaimer';
import { UserRegister } from '../screens/UserRegister';

import TabRoutes from './tab.routes';
import { PasswordDetails } from '../screens/PasswordDetails';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  const { user } = useAuth();

  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'transparent'
        }
      }}
      initialRouteName={ user.username ? 'Home' : 'Greetings' }
    >
      
      <Screen
        name="Greetings"
        component={Greetings}
      />

      <Screen
        name="Disclaimer"
        component={Disclaimer}
      />

      <Screen
        name="UserRegister"
        component={UserRegister}
      />

      <Screen
        name="Home"
        component={TabRoutes}
      />

      <Screen
        name="NewPassword"
        component={TabRoutes}
      />

      <Screen
        name="PasswordDetails"
        component={PasswordDetails}
      />
      
    </Navigator>
  );  
}