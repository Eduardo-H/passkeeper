import React from 'react';
import { FlatList } from 'react-native';
import { PasswordSkeleton } from '../PasswordSkeleton';

import { styles } from './styles';

export function SkeletonList() {
  return (
    <FlatList
      data={new Array(3)}
      keyExtractor={(item, index) => String(index)}
      renderItem={({ item }) => (
        <PasswordSkeleton />
      )}
      contentContainerStyle={{ paddingBottom: 20 }}
      showsVerticalScrollIndicator={false}
      style={styles.container}
    />
  );
}