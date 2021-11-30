import React from 'react';
import { 
  View, 
  SafeAreaView, 
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { SmallButton } from '../../components/SmallButton';
import GreetingsLightSvg from '../../assets/light/greetings.svg';
import GreetingsDarkSvg from '../../assets/dark/greetings.svg';

import { styles } from './styles';
import { useTheme } from '../../hooks/useTheme';

export function Greetings() {
  const navigation = useNavigation();
  const { theme } = useTheme();

  function handleGoToNextScreen() {
    navigation.navigate('Disclaimer');
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View/>

      <View>
        <Text style={[styles.title, { color: theme.text }]}>
          Welcome to PassKeeper
        </Text>

        <Text style={[styles.subtitle, { color: theme.text }]}>
          Save your passwords in a {'\n'} 
          fast and safe way
        </Text>
        
        { 
          theme.theme_type === 'light' 
          ? <GreetingsLightSvg width={300} height={220} /> 
          : <GreetingsDarkSvg width={300} height={220} /> 
        }
        
      </View>

      <SmallButton onPressAction={handleGoToNextScreen} />
    </SafeAreaView>
  );
}