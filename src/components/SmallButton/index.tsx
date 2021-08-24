import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';

interface SmallButtonProps {
  onPressAction: () => void;
}

export function SmallButton({ onPressAction }: SmallButtonProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPressAction}
    >
      <Feather 
        name='chevron-right' 
        style={styles.buttonIcon} 
      />     
    </TouchableOpacity>
  );
}