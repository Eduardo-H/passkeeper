import React from 'react';
import { View } from 'react-native';
import ContentLoader, { Rect } from 'react-content-loader/native';

import { styles } from './styles';

export function PasswordSkeleton() {
  return (
    <View style={styles.container}>
      <ContentLoader 
        speed={2}
        backgroundColor="#dadada"
        foregroundColor="#bebebe"
      >
        <Rect y="32%" rx="4" ry="4" width="150" height="15"  />
        <Rect y="57%" rx="4" ry="4" width="100" height="13" />
      </ContentLoader>
    </View>
  );
}