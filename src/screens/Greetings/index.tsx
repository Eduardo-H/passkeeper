import React from 'react';
import { 
  View, 
  SafeAreaView, 
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { SmallButton } from '../../components/SmallButton';
import GreetingsSvg from '../../assets/greetings.svg';

import { styles } from './styles';

export function Greetings() {
  const navigation = useNavigation();

  function handleGoToNextScreen() {
    navigation.navigate('Disclaimer');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View/>

      <View>
        <Text style={styles.title}>
          Welcome to PassKeeper
        </Text>

        <Text style={styles.subtitle}>
          Save your passwords in a {'\n'} 
          fast and safe way
        </Text>

        <GreetingsSvg width={300} height={220} />
      </View>

      <SmallButton onPressAction={handleGoToNextScreen} />
    </SafeAreaView>
  );
}