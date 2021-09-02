import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_PASSWORDS } from '../../configs/database';
import { CategoryList } from '../../components/CategoryList';
import { HomeHeader } from '../../components/HomeHeader';
import { PasswordList } from '../../components/PasswordList';
import { SkeletonList } from '../../components/SkeletonList';

import EmptySvg from '../../assets/empty.svg';
import { theme } from '../../global/styles/themes';

import { styles } from './styles';

export function Home() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [categorySelected, setCategorySelected] = useState('');
  const [filteredPasswords, setFilteredPasswords] = useState<Password[]>([]);
  const [passwords, setPasswords] = useState<Password[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadPasswords() {
    const response = await AsyncStorage.getItem(COLLECTION_PASSWORDS);
    const storage: Password[] = response ? JSON.parse(response) : [];

    for (const item of storage) {
      item.password = await SecureStore.getItemAsync(item.passwordKey);
    }

    setPasswords(storage);
    setFilteredPasswords(storage);

    setLoading(false);
  }

  function selectCategory(category: string) {
    const selectedCategory = category === categorySelected
      ? ''
      : category;

    setCategorySelected(selectedCategory);

    if (selectedCategory === '')
      return setFilteredPasswords(passwords);

    const filtered = passwords.filter(
      password => password.categoryId === category
    );

    setFilteredPasswords(filtered);
  }

  function selectPassword(password: Password) {
    navigation.navigate('PasswordDetails', { password });
  }

  useEffect(() => {
    if (isFocused) {
      loadPasswords();
    } else {
      setLoading(true);
      setCategorySelected('');
    }      
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />

      <CategoryList
        categorySelected={categorySelected}
        setCategorySelected={selectCategory}
      />

      <View style={styles.info}>
        <Text style={styles.title}>
          Your Passwords
        </Text>

        <Text style={styles.count}>
          Total {filteredPasswords.length}
        </Text>
      </View>

      {
        loading ? (
          <SkeletonList />
        ) : (
          filteredPasswords.length > 0 
          ? (
            <PasswordList 
              passwords={filteredPasswords} 
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
        )
      }
    </SafeAreaView>
  );
}