import React, { useState } from 'react';
import 'react-native-get-random-values';
import { 
  Keyboard, 
  StatusBar, 
  Text, 
  ToastAndroid, 
  View 
} from 'react-native';
import { 
  BorderlessButton, 
  ScrollView, 
  TouchableWithoutFeedback 
} from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { v4 as uuid } from 'uuid';
import * as SecureStore from 'expo-secure-store';
import { AntDesign } from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_PASSWORDS } from '../../configs/database';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Picker } from '../../components/Picker';
import { categories } from '../../utils/categories';

import { theme } from '../../global/styles/themes';
import { styles } from './styles';

export function NewPassword() {
  const [title, setTitle] = useState('');
  const [password, setPassword] = useState('');
  const [category, setCategory] = useState<Category>(categories[0]);

  const [isTitleInputInvalid, setIsTitleInputInvalid] = useState(false);
  const [isPasswordInputInvalid, setIsPasswordInputInvalid] = useState(false);

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

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

    const passwordKey = uuid();

    try {
      await SecureStore.setItemAsync(passwordKey, password);
    } catch (err) {
      ToastAndroid.show('Unable to save the password', ToastAndroid.SHORT);
    }    

    const newPassword: Password = {
      id: uuid(),
      title,
      passwordKey,
      categoryId: category.id,
      createdAt: new Date()
    }

    try {
      const data = await AsyncStorage.getItem(COLLECTION_PASSWORDS);
      const oldPasswords = data ? JSON.parse(data) : [];

      await AsyncStorage.setItem(COLLECTION_PASSWORDS,
        JSON.stringify([
          ...oldPasswords,
          newPassword
        ])
      );

      clearFields();

      navigation.navigate('MyPasswords');
    } catch (err) {
      throw new Error(err);
    }    
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        barStyle={"dark-content"} 
        backgroundColor={theme.colors.background}
      />

      <ScrollView>
        <TouchableWithoutFeedback 
          style={styles.content}
          onPress={Keyboard.dismiss}
        >
          <View style={styles.header}>
            <BorderlessButton onPress={handleGoBack}>
              <AntDesign 
                name="left" 
                size={24} 
                color={theme.colors.text} 
              />
            </BorderlessButton>

            <Text style={styles.title}>
              New Password
            </Text>

            <View style={{ width: 24 }} />
          </View>

          <View style={{ marginTop: 40 }}>
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