import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { authenticateAsync } from 'expo-local-authentication';

import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/useAuth';

import AuthenticationSvg from '../../assets/authentication.svg';

import { styles } from './styles';
import { useTheme } from '../../hooks/useTheme';

export function Authentication() {
  const navigation = useNavigation();
  const { user } = useAuth();
  const { theme } = useTheme();

  async function authenticate() {
    const response = await authenticateAsync({
      promptMessage: 'Please, authenticate to use the app'
    });

    if (response.success) {
      navigation.navigate('Home');
    }
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.text }]}>
          Welcome back {user.username.split(' ')[0]}!
        </Text>

        <Text style={[styles.subtitle, { color: theme.text }]}>
          Authenticate yourself to use the app.
        </Text>

        <AuthenticationSvg height={160} style={styles.illustration} />
      </View>

      <Button 
        title="Authenticate" 
        onPress={authenticate}
      />
    </SafeAreaView>
  );
}