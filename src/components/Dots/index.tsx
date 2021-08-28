import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { styles } from './styles';

interface DotsProps {
  quantity: number;
}

export function Dots({ quantity }: DotsProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={new Array(quantity)}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item}) => (
          <View style={styles.dot} />
        )}
        horizontal
      />
    </View>
  )
}