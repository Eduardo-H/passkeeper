import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TextInput, Keyboard } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import * as SecureStore from 'expo-secure-store';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useTheme } from '../../hooks/useTheme';
import { COLLECTION_PASSWORDS } from '../../configs/database';
import { CategoryList } from '../../components/CategoryList';
import { HomeHeader } from '../../components/HomeHeader';
import { PasswordList } from '../../components/PasswordList';
import { SkeletonList } from '../../components/SkeletonList';

import EmptyLightSvg from '../../assets/light/empty.svg';
import EmptyDarkSvg from '../../assets/dark/empty.svg';

import { styles } from './styles';

export function Home() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { theme } = useTheme();

  const [categorySelected, setCategorySelected] = useState('');
  const [filteredPasswords, setFilteredPasswords] = useState<Password[]>([]);
  const [passwords, setPasswords] = useState<Password[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

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

  function searchPasswords() {
    if (search.trim() === '') {
      const filteredPass = passwords.filter(
        password => password.categoryId === categorySelected
      );
      setFilteredPasswords(filteredPass);
    }

    let filtered: Array<Password>;

    if (categorySelected === '') {
      filtered = passwords.filter(
        password => password.title.includes(search)
      );
    } else {
      filtered = passwords.filter(
        password => password.title.includes(search) && password.categoryId === categorySelected
      );
    }

    setFilteredPasswords(filtered);
  }

  function selectCategory(category: string) {
    const selectedCategory = category === categorySelected
      ? ''
      : category;

    setCategorySelected(selectedCategory);

    if (selectedCategory === '' && search.trim() === '')
      return setFilteredPasswords(passwords);

    let filtered: Array<Password>;

    if (search.trim() === '') {
      filtered = passwords.filter(
        password => password.categoryId === category
      );
    } else if (selectedCategory !== '') {
      filtered = passwords.filter(
        password => password.categoryId === category && password.title === search
      );
    } else {
      filtered = passwords.filter(
        password => password.title === search
      );
    }

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

  useEffect(() => {
    searchPasswords();
  }, [search]);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
      >
        <HomeHeader />

        <View style={[
          styles.search,
          { backgroundColor: theme.input, borderColor: theme.inputBorder, borderWidth: 1 }
        ]}>
          <AntDesign
            name="search1"
            size={18}
            color={theme.label}
          />

          <TextInput
            style={[styles.searchInput, { color: theme.text }]}
            placeholder="Search"
            placeholderTextColor={theme.label}
            selectionColor={theme.text}
            onChangeText={setSearch}
          />
        </View>

        <CategoryList
          categorySelected={categorySelected}
          setCategorySelected={selectCategory}
        />

        <View style={styles.info}>
          <Text style={[styles.title, { color: theme.text }]}>
            Your Passwords
          </Text>

          <Text style={[styles.count, { color: theme.text }]}>
            Total {filteredPasswords.length}
          </Text>
        </View>
      </TouchableWithoutFeedback>

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
                {
                  theme.theme_type === 'light'
                    ? <EmptyLightSvg width={200} height={120} />
                    : <EmptyDarkSvg width={200} height={120} />
                }


                <Text style={[styles.emptyText, { color: theme.text }]}>
                  No data found
                </Text>
              </View>
            )
        )
      }
    </SafeAreaView>
  );
}