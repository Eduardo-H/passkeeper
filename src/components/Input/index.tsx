import React from 'react';
import { 
  Text, 
  TextInput, 
  TextInputProps, 
  View 
} from 'react-native';

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