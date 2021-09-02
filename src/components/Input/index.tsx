import React from 'react';
import { 
  Text, 
  TextInput, 
  TextInputProps, 
  View 
} from 'react-native';
import { theme } from '../../global/styles/themes';

import { styles } from './styles';

interface InputProps extends TextInputProps {
  label: string;
  isInvalid: boolean;
}

export function Input({ label, isInvalid, ...rest }: InputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{ label }</Text>

      <TextInput
        style={
          isInvalid 
          ? [styles.input, styles.invalid] 
          : styles.input
        }
        selectionColor={theme.colors.text}
        {...rest}
      />

      {
        isInvalid && (
          <Text style={styles.invalidText}>
            This field is required
          </Text>
        )
      }      
    </View>
  );
}