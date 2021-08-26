import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import { theme } from '../../global/styles/themes';
import { styles } from './styles';
import { TextInput } from 'react-native-gesture-handler';

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

        <TextInput 
          style={ 
            hidePassword 
            ? styles.dots
            : styles.password
          }
          value={password.password}
          editable={false}
          secureTextEntry={hidePassword}
        />
      </View>

      <RectButton 
        style={styles.visibility}
        onPress={() => setHidePassword(!hidePassword)}
      >
        <Ionicons 
          name={ hidePassword ? "eye-off-outline" : "eye-outline" } 
          size={26} 
          color={theme.colors.text} 
        />
      </RectButton>
    </RectButton>
  )
}