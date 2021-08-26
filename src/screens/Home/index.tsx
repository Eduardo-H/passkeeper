import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { Header } from '../../components/Header';
import { theme } from '../../global/styles/themes';

import { styles } from './styles';

export function Home() {
  return (
    <>
      <StatusBar 
        barStyle={"light-content"} 
        backgroundColor={theme.colors.primary}
        translucent
      />

      <SafeAreaView style={styles.container}>
        <Header />
      </SafeAreaView>
    </>
  );
}