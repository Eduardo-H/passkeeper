import React, { useEffect, useState } from 'react';
import 'react-native-get-random-values';
import {
  Keyboard,
  ToastAndroid,
  View
} from 'react-native';
import {
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, useIsFocused } from '@react-navigation/native';
import { v4 as uuid } from 'uuid';
import * as SecureStore from 'expo-secure-store';
import { AntDesign } from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_PASSWORDS } from '../../configs/database';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Picker } from '../../components/Picker';
import { categories } from '../../utils/categories';

import { styles } from './styles';
import { Header } from '../../components/Header';
import { useTheme } from '../../hooks/useTheme';

interface Params {
  currentPassword?: Password;
}

export function NewPassword() {
  const { theme } = useTheme();

  const [title, setTitle] = useState('');
  const [password, setPassword] = useState('');
  const [category, setCategory] = useState<Category>(categories[0]);

  const [isTitleInputInvalid, setIsTitleInputInvalid] = useState(false);
  const [isPasswordInputInvalid, setIsPasswordInputInvalid] = useState(false);

  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const route = useRoute();
  const { currentPassword } = route?.params as Params;

  function checkFormInvalid(): boolean {
    let isInvalid = false;

    if (title.trim() === '') {
      setIsTitleInputInvalid(true);
      isInvalid = true;
    } else {
      setIsTitleInputInvalid(false);
    }

    if (password.trim() === '') {
      setIsPasswordInputInvalid(true);
      isInvalid = true;
    } else {
      setIsPasswordInputInvalid(false);
    }

    return isInvalid;
  }

  function clearFields() {
    setTitle('');
    setPassword('');
    setCategory(categories[0]);
  }

  async function handleSavePassword() {
    if (checkFormInvalid()) {
      return;
    }

    const passwordKey = currentPassword?.passwordKey || uuid();

    // Encrypting and saving the password
    try {
      await SecureStore.setItemAsync(passwordKey, password);
    } catch (err) {
      ToastAndroid.show('Unable to save the password', ToastAndroid.SHORT);
    }

    // Fetching existent data
    const data = await AsyncStorage.getItem(COLLECTION_PASSWORDS);
    const oldPasswords = data ? JSON.parse(data) : [];

    let updatedPasswords: string;

    // Creating a new object or updating the existent one
    if (currentPassword) {
      const existentPassword = oldPasswords.find(item => item.id === currentPassword.id);

      Object.assign(existentPassword, {
        title,
        categoryId: category.id
      });

      updatedPasswords = JSON.stringify([
        ...oldPasswords
      ]);
    } else {
      const newPassword: Password = {
        id: uuid(),
        title,
        passwordKey,
        categoryId: category.id,
        createdAt: new Date(),
      }

      updatedPasswords = JSON.stringify([
        ...oldPasswords,
        newPassword
      ]);
    }

    try {
      await AsyncStorage.setItem(COLLECTION_PASSWORDS, updatedPasswords);

      clearFields();

      navigation.navigate('MyPasswords');
    } catch (err) {
      throw new Error(err);
    }
  }

  useEffect(() => {
    if (isFocused && currentPassword) {
      setTitle(currentPassword.title);
      setPassword(currentPassword.password);
      setCategory(categories.find(item => item.id === currentPassword.categoryId));
    } else {
      clearFields();
      navigation.setParams({ currentPassword: null });
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView>
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
        >
          <Header title="New Password" />

          <View style={styles.content}>
            <Input
              label="Title"
              isInvalid={isTitleInputInvalid}
              value={title}
              onChangeText={setTitle}
            />

            <Input
              label="Password"
              isInvalid={isPasswordInputInvalid}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <Picker
              selectedCategory={category}
              onSelect={setCategory}
            />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          title="Save"
          onPress={handleSavePassword}
        />
      </View>
    </SafeAreaView>
  );
}