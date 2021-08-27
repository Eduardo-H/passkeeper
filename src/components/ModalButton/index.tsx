import React from 'react';
import { 
  Text, 
  TouchableOpacity, 
  TouchableOpacityProps 
} from 'react-native';

import { styles } from './styles';

interface ModalButtonProps extends TouchableOpacityProps {
  title: string;
}

export function ModalButton({ title, ...rest }: ModalButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      {...rest}
    >
      <Text style={styles.title}>
        { title }
      </Text>
    </TouchableOpacity
    >
  )
}