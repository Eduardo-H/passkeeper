import React from 'react';
import { Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';
import { useTheme } from '../../hooks/useTheme';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  const navigation = useNavigation();
  const { theme } = useTheme();

  function handleGoBack() {
    navigation.goBack();
  }  

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={handleGoBack}>
        <AntDesign 
          name="left" 
          size={22} 
          color={theme.text} 
        />
      </BorderlessButton>

      <Text style={[styles.title, { color: theme.text }]}>
        { title }
      </Text>

      <View style={{ width: 24 }} />
    </View>
  );
}