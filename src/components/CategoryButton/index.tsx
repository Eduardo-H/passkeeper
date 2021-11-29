import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from '../../hooks/useTheme';

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
  const { theme } = useTheme();

  return (
    <RectButton 
      style={
        isActive 
        ? [styles.container, styles.active] 
        : [styles.container, { backgroundColor: theme.secondary }] 
      }
      {...rest}
    >
      <Text style={ isActive ? [styles.title, { color: theme.contrastText }] : [styles.title, { color: theme.text}] }>
        { title }
      </Text>
    </RectButton>
  );
}