import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Keyboard, SafeAreaView, Text, ToastAndroid, View } from 'react-native';
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { Button } from '../../components/Button';
import { COLLECTION_USERS } from '../../configs/database';
import { theme } from '../../global/styles/themes';
import { useAuth } from '../../hooks/useAuth';

import { styles } from './styles';

export function UserRegister() {
  const [username, setUsername] = useState('');

  const navigation = useNavigation();
  const { loadUser } = useAuth();
  
  async function handleSaveUsername() {
    const newUser = {
      username: username,
      createdAt: new Date()
    };

    await AsyncStorage.setItem(
      COLLECTION_USERS,
      JSON.stringify(newUser)
    );

    loadUser();
    
    navigation.navigate('Home');
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback 
        onPress={Keyboard.dismiss}
        style={styles.content}
      >
        <Text style={styles.title}>
          PassKeeper
        </Text>

        <View style={styles.form}>
          <Text style={styles.label}>How can I call you?</Text>
          <TextInput
            style={styles.input}
            maxLength={20}
            selectionColor={theme.colors.text}
            onChangeText={setUsername}
          />
        </View>

        <Button 
          title="Start" 
          onPress={handleSaveUsername} 
        />
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}