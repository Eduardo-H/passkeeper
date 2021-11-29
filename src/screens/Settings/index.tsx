import React, { useEffect, useState } from 'react';
import { Keyboard, Switch, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

import { useAuth } from '../../hooks/useAuth';

import { styles } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { useTheme } from '../../hooks/useTheme';

export function Settings() {
  const { user, updateUser } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigation = useNavigation();

  const [username, setUsername] = useState(user.username);
  const [isUsernameInvalid, setIsUsernameInvalid] = useState(false);  
  const [updateButtonVisible, setUpdateButtonVisible] = useState(false)

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
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <TouchableWithoutFeedback 
        onPress={Keyboard.dismiss}
        style={{ height: '100%' }}
      >
        <Header title="Settings" />

        <View style={styles.content}>
          <Input
            label="Username" 
            isInvalid={isUsernameInvalid}
            value={username}
            onChangeText={setUsername}
            maxLength={20}
          />

          <View style={styles.darkSwitch}>
            <Text style={[styles.darkSwitchText, { color: theme.label }]}>
              Dark Mode
            </Text>

            <Switch
              style={styles.switch}
              onValueChange={toggleTheme}
              value={theme.theme_type === 'dark'}
            />
          </View>

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