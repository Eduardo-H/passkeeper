import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_PASSWORDS } from '../../configs/database';
import { CategoryList } from '../../components/CategoryList';
import { Header } from '../../components/Header';
import { PasswordList } from '../../components/PasswordList';

import EmptySvg from '../../assets/empty.svg';
import { theme } from '../../global/styles/themes';

import { styles } from './styles';

export function Home() {
  const [categorySelected, setCategorySelected] = useState('');
  const [passwords, setPasswords] = useState<Password[]>([]);

  function selectCategory(category: string) {
    const selectedCategory = category === categorySelected
      ? ''
      : category;

    setCategorySelected(selectedCategory);
  }

  function selectPassword(id: string) {

  }

  async function loadPasswords() {
    const response = await AsyncStorage.getItem(COLLECTION_PASSWORDS);
    const storage: Password[] = response ? JSON.parse(response) : [];

    storage.forEach(async item => {
      item.password = await SecureStore.getItemAsync(item.passwordKey);
    })

    setPasswords(storage);
  }

  useEffect(() => {
    loadPasswords();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        barStyle={"dark-content"} 
        backgroundColor={theme.colors.primary}
      />

      <Header />

      <CategoryList
        categorySelected={categorySelected}
        setCategorySelected={selectCategory}
      />

      <View style={styles.info}>
        <Text style={styles.title}>
          Your Passwords
        </Text>

        <Text style={styles.count}>
          Total {passwords.length}
        </Text>
      </View>

      {
        passwords.length > 0 
        ? (
          <PasswordList 
            passwords={passwords} 
            selectPassword={selectPassword} 
          />
        ) : (
          <View style={styles.empty}>
            <EmptySvg width={200} height={120} />

            <Text style={styles.emptyText}>
              No data found
            </Text>
          </View>
        )
      }
    </SafeAreaView>
  );
}