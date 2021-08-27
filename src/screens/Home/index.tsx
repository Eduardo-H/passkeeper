import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';

import { CategoryList } from '../../components/CategoryList';
import { Header } from '../../components/Header';
import { PasswordList } from '../../components/PasswordList';

import EmptySvg from '../../assets/empty.svg';
import { theme } from '../../global/styles/themes';

import { styles } from './styles';

const passwords: Password[] = [
  { 
    id: '1', 
    title: 'Youtube', 
    password: 'strong_password', 
    categoryId: '4',
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
    categoryId: '2',
    createdAt: new Date()
  }
];

export function Home() {
  const [categorySelected, setCategorySelected] = useState('');
  const [filteredPasswords, setFilteredPasswords] = useState<Password[]>(passwords);

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

  function selectPassword(id: string) {

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

        <View style={styles.info}>
          <Text style={styles.title}>
            Your Passwords
          </Text>

          <Text style={styles.count}>
            Total of {filteredPasswords.length} passwords
          </Text>
        </View>

        {
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
        }
      </SafeAreaView>
    </>
  );
}