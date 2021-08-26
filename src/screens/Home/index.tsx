import React, { useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { CategoryList } from '../../components/CategoryList';
import { Header } from '../../components/Header';
import { PasswordList } from '../../components/PasswordList';
import { theme } from '../../global/styles/themes';

import { styles } from './styles';

export function Home() {
  const [categorySelected, setCategorySelected] = useState('');

  function selectCategory(category: string) {
    categorySelected === category 
      ? setCategorySelected('') 
      : setCategorySelected(category);
  }

  function selectPassword(id: string) {

  }

  const passwords: Password[] = [
    { 
      id: '1', 
      title: 'Youtube', 
      password: 'strong_password', 
      categoryId: '1',
      createdAt: new Date()
    },
    { 
      id: '2', 
      title: 'Rocketseat', 
      password: 'ignite_eh_foda', 
      categoryId: '1',
      createdAt: new Date()
    },
    { 
      id: '3', 
      title: 'Twitch', 
      password: 'ignite_eh_foda', 
      categoryId: '1',
      createdAt: new Date()
    },
    { 
      id: '4', 
      title: 'Outlook', 
      password: 'ignite_eh_foda', 
      categoryId: '1',
      createdAt: new Date()
    },
    { 
      id: '5', 
      title: 'Gmail', 
      password: 'ignite_eh_foda', 
      categoryId: '1',
      createdAt: new Date()
    }
  ];

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

        <PasswordList 
          passwords={passwords} 
          selectPassword={selectPassword} 
        />
      </SafeAreaView>
    </>
  );
}