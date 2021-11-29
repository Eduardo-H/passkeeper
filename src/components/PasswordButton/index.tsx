import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import { Dots } from '../Dots';

import { theme } from '../../global/styles/themes';
import { styles } from './styles';

interface PasswordCardProps extends RectButtonProps {
  password: Password;
}

export function PasswordButton({ password, ...rest }: PasswordCardProps) {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <RectButton 
      style={styles.container}
      {...rest}
    >
      <View style={styles.info}>
        <Text style={styles.title}>
          {password.title}
        </Text>

        {
          hidePassword 
          ? (
            <Dots 
              quantity={password.password.length} 
            />
          ) : (
            <Text style={styles.password}>
              {password.password}
            </Text>
          )
        }
      </View>

      <RectButton 
        style={styles.visibility}
        onPress={() => setHidePassword(!hidePassword)}
      >
        <Ionicons 
          name={ hidePassword ? "eye-off-outline" : "eye-outline" } 
          size={24} 
          color={theme.colors.text} 
        />
      </RectButton>
    </RectButton>
  )
}