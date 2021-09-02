import React, { useEffect, useState } from 'react';
import { Keyboard, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

import { useAuth } from '../../hooks/useAuth';

import { theme } from '../../global/styles/themes';
import { styles } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Settings() {
  const { user, updateUser } = useAuth();
  const navigation = useNavigation();

  const [username, setUsername] = useState(user.username);
  const [isUsernameInvalid, setIsUsernameInvalid] = useState(false);  
  const [updateButtonVisible, setUpdateButtonVisible] = useState(false)
  
  function handleGoBack() {
    navigation.goBack();
  }

  function handleUpdateUser() {
    if (username.trim() === '') {
      return setIsUsernameInvalid(true);
    }

    updateUser(username);

    navigation.navigate('MyPasswords');
  }

  useEffect(() => {
    if (username != user.username) {
      setUpdateButtonVisible(true);
    } else {
      setUpdateButtonVisible(false);
    }
  }, [username]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback 
        onPress={Keyboard.dismiss}
        style={{ height: '100%' }}
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
            Settings
          </Text>

          <View style={{ width: 24 }} />
        </View>

        <View style={styles.content}>
          <Input
            label="Username" 
            isInvalid={isUsernameInvalid}
            value={username}
            onChangeText={setUsername}
            maxLength={20}
          />

          <View 
            style={ 
              updateButtonVisible 
              ? { marginTop: 'auto', display: 'flex' } 
              : { marginTop: 'auto', display: 'none'}
            }
          >
            <Button 
              title="Update user" 
              onPress={handleUpdateUser}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}