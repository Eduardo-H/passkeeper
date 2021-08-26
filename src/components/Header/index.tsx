import AppLoading from 'expo-app-loading';
import React from 'react';
import { Text, View } from 'react-native';

import { useAuth } from '../../hooks/useAuth';

import { styles } from './styles';

export function Header() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>
          Welcome,
        </Text>
        <Text style={styles.username}>
          { user.username }
        </Text>
      </View>

      
    </View>
  );
}