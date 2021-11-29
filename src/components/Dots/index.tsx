import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useTheme } from '../../hooks/useTheme';

import { styles } from './styles';

interface DotsProps {
  quantity: number;
}

export function Dots({ quantity }: DotsProps) {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <FlatList
        data={new Array(quantity)}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item}) => (
          <View style={[styles.dot, { backgroundColor: theme.text }]} />
        )}
        horizontal
      />
    </View>
  )
}