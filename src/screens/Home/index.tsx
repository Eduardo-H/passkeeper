import React, { useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { CategoryList } from '../../components/CategoryList';
import { Header } from '../../components/Header';
import { theme } from '../../global/styles/themes';

import { styles } from './styles';

export function Home() {
  const [categorySelected, setCategorySelected] = useState('');

  function selectCategory(category: string) {
    categorySelected === category 
      ? setCategorySelected('') 
      : setCategorySelected(category);
  }

  return (
    <>
      <StatusBar 
        barStyle={"light-content"} 
        backgroundColor={theme.colors.primary}
        translucent
      />

      <SafeAreaView style={styles.container}>
        <Header />

        <CategoryList
          categorySelected={categorySelected}
          setCategorySelected={selectCategory}
        />
      </SafeAreaView>
    </>
  );
}