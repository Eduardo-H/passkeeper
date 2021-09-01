import React from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useAuth } from '../../hooks/useAuth';

import { styles } from './styles';
import { theme } from '../../global/styles/themes';
import { useNavigation } from '@react-navigation/native';

export function Header() {
  const navigation = useNavigation();
  const { user } = useAuth();

  function handleOpenSettingsScreen() {
    // navigation.navigate('Settings');
  }

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

      <RectButton
        style={styles.settingsButton}
        onPress={handleOpenSettingsScreen}
      >
        <MaterialCommunityIcons 
          name="cog-outline" 
          size={24} 
          color={theme.colors.contrastText} 
        />
      </RectButton>
    </View>
  );
}