import React from 'react';
import { 
  View, 
  SafeAreaView, 
  TouchableOpacity, 
  Text,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import GreetingsSvg from '../../assets/greetings.svg';

import { styles } from './styles';

export function Greetings() {
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

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
      >
        <Feather 
          name='chevron-right' 
          style={styles.buttonIcon} 
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}