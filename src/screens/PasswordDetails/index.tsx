import React from 'react';
import { Alert, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RectButton } from 'react-native-gesture-handler';

import { COLLECTION_PASSWORDS } from '../../configs/database';
import { categories } from '../../utils/categories';

import { styles } from './styles';
import { Header } from '../../components/Header';
import { useTheme } from '../../hooks/useTheme';

interface Params {
  password: Password;
}

export function PasswordDetails() {
  const navigation = useNavigation();
  const route = useRoute();

  const { theme } = useTheme();

  const { password } = route.params as Params;

  const category = categories.find(item => item.id === password.categoryId);

  function handleUpdate() {
    navigation.navigate('NewPassword', {
      screen: 'NewPassword',
      params: { currentPassword: password }
    });
  }

  async function deletePassword(id: string) {
    const data = await AsyncStorage.getItem(COLLECTION_PASSWORDS);
    const passwords = data ? (JSON.parse(data) as Password[]) : [];

    const index = passwords.findIndex(item => item.id === id);

    passwords.splice(index, 1);

    await AsyncStorage.setItem(COLLECTION_PASSWORDS, JSON.stringify(passwords));
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
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <Header title="Details" />

      <View style={[styles.card, { backgroundColor: theme.secondary }]}>
        <View style={styles.infoGroup}>
          <Text style={[styles.label, { color: theme.label }]}>Title</Text>
          <Text style={[styles.text, { color: theme.text }]}>{ password.title }</Text>
        </View>

        <View style={styles.infoGroup}>
          <Text style={[styles.label, { color: theme.label }]}>Password</Text>
          <Text style={[styles.text, { color: theme.text }]}>{ password.password }</Text>
        </View>

        <View style={styles.infoGroup}>
          <Text style={[styles.label, { color: theme.label }]}>Category</Text>
          <Text style={[styles.text, { color: theme.text }]}>{ category.title }</Text>
        </View>

        <View>
          <Text style={[styles.label, { color: theme.label }]}>Created at</Text>
          <Text style={[styles.text, { color: theme.text }]}>
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
          <RectButton 
            style={[styles.button, styles.updateButton]}
            onPress={handleUpdate}
          >
            <Text style={[styles.buttonText, { color: theme.contrastText }]}>
              Update
            </Text>
          </RectButton>

          <RectButton 
            style={[styles.button, styles.deletButton]}
            onPress={handleDelete}
          >
            <Text style={[styles.buttonText, { color: theme.white }]}>
              Delete
            </Text>
          </RectButton>
        </View>
      </View>
    </SafeAreaView>
  )
}