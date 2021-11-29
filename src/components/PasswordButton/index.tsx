import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import { Dots } from '../Dots';

import { styles } from './styles';
import { useTheme } from '../../hooks/useTheme';

interface PasswordCardProps extends RectButtonProps {
  password: Password;
}

export function PasswordButton({ password, ...rest }: PasswordCardProps) {
  const { theme } = useTheme();
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <RectButton 
      style={[styles.container, { backgroundColor: theme.secondary }]}
      {...rest}
    >
      <View style={styles.info}>
        <Text style={[styles.title, { color: theme.text }]}>
          {password.title}
        </Text>

        {
          hidePassword 
          ? (
            <Dots 
              quantity={password.password.length} 
            />
          ) : (
            <Text style={[styles.password, { color: theme.text }]}>
              {password.password}
            </Text>
          )
        }
      </View>

      <RectButton 
        style={[styles.visibility, { backgroundColor: theme.secondary }]}
        onPress={() => setHidePassword(!hidePassword)}
      >
        <Ionicons 
          name={ hidePassword ? "eye-off-outline" : "eye-outline" } 
          size={24} 
          color={theme.text} 
        />
      </RectButton>
    </RectButton>
  )
}