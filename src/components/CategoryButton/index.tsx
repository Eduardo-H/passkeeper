import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

interface CategoryButtonProps extends RectButtonProps {
  title: string;
  isActive?: boolean;
}

export function CategoryButton({ 
  title, 
  isActive, 
  ...rest 
}: CategoryButtonProps) {
  return (
    <RectButton 
      style={
        isActive 
        ? [styles.container, styles.active] 
        : [styles.container, styles.inactive] 
      }
      {...rest}
    >
      <Text style={styles.title}>
        { title }
      </Text>
    </RectButton>
  );
}