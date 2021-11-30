import React from 'react';
import { 
  Text, 
  TextInput, 
  TextInputProps, 
  View 
} from 'react-native';
import { useTheme } from '../../hooks/useTheme';

import { styles } from './styles';

interface InputProps extends TextInputProps {
  label: string;
  isInvalid: boolean;
}

export function Input({ label, isInvalid, ...rest }: InputProps) {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: theme.label}]}>{ label }</Text>

      <TextInput
        style={
          isInvalid 
          ? [styles.input, styles.invalid, { backgroundColor: theme.input, color: theme.text }] 
          : [styles.input, { backgroundColor: theme.input, borderColor: theme.inputBorder, color: theme.text }]
        }
        selectionColor={theme.text}
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