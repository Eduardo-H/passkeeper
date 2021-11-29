import React from 'react';
import { 
  Text, 
  TouchableOpacity, 
  TouchableOpacityProps 
} from 'react-native';
import { useTheme } from '../../hooks/useTheme';

import { styles } from './styles';

interface ModalButtonProps extends TouchableOpacityProps {
  title: string;
}

export function ModalButton({ title, ...rest }: ModalButtonProps) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, { backgroundColor: theme.secondary }]}
      {...rest}
    >
      <Text style={[styles.title, { color: theme.text }]}>
        { title }
      </Text>
    </TouchableOpacity
    >
  )
}