import React from 'react';
import { Alert, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/themes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_PASSWORDS } from '../../configs/database';

interface Params {
  password: Password;
}

export function PasswordDetails() {
  const navigation = useNavigation();
  const route = useRoute();

  const { password } = route.params as Params;

  function handleGoBack() {
    navigation.goBack();
  }

  async function deletePassword(id: string) {
    const data = await AsyncStorage.getItem(COLLECTION_PASSWORDS);
    const passwords = data ? (JSON.parse(data) as Password[]) : [];

    const passwordIndex = passwords.findIndex(item => item.id === id);

    const updatedPasswords = passwords.slice(passwordIndex, 1);

    await AsyncStorage.setItem(COLLECTION_PASSWORDS, JSON.stringify(updatedPasswords));
  }

  function handleDelete() {
    Alert.alert('Delete password', 
      'Are you sure you want to delete this password?', 
      [{
        text: 'No',
        style: 'cancel'
      },
      {
        text: 'Yes',
        onPress: async () => {
          try {
            await deletePassword(String(password.id));

            navigation.navigate('MyPasswords');
          } catch (error) {
            Alert.alert('Unable to delete the password.');
          }
        }
      }]
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BorderlessButton onPress={handleGoBack}>
          <AntDesign 
            name="left" 
            size={24} 
            color={theme.colors.text} 
          />
        </BorderlessButton>

        <Text style={styles.title}>
          Details
        </Text>

        <View style={{ width: 24 }} />
      </View>

      <View style={styles.card}>
        <View style={styles.infoGroup}>
          <Text style={styles.label}>Title</Text>
          <Text style={styles.text}>{ password.title }</Text>
        </View>

        <View style={styles.infoGroup}>
          <Text style={styles.label}>Password</Text>
          <Text style={styles.text}>{ password.password }</Text>
        </View>

        <View style={styles.infoGroup}>
          <Text style={styles.label}>Category</Text>
          <Text style={styles.text}>{ password.title }</Text>
        </View>

        <View>
          <Text style={styles.label}>Created at</Text>
          <Text style={styles.text}>
            { 
              new Date(password.createdAt).toLocaleDateString('us', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
              })
            }
          </Text>
        </View>

        <View style={styles.buttonGroup}>
          <RectButton style={[styles.button, styles.updateButton]}>
            <Text style={[styles.buttonText, { color: theme.colors.text }]}>
              Update
            </Text>
          </RectButton>

          <RectButton 
            style={[styles.button, styles.deletButton]}
            onPress={handleDelete}
          >
            <Text style={[styles.buttonText, { color: theme.colors.white }]}>
              Delete
            </Text>
          </RectButton>
        </View>
      </View>
    </SafeAreaView>
  )
}