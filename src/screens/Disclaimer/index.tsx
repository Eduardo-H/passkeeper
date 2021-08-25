import React from 'react';
import { Text, View } from 'react-native';

import SecuritySvg from '../../assets/security.svg';
import { SmallButton } from '../../components/SmallButton';

import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export function Disclaimer() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('UserRegister');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PassKeeper</Text>

      <View>
        <Text style={styles.text}>
          Your passwords are saved in your {'\n'}
          device, after being encrypted, of course. 
        </Text>

        <SecuritySvg 
          style={styles.illustration}
          width={300} 
          height={220} 
        />

        <Text style={styles.text}>
          No data is sent to the internet, so {'\n'}
          you’re safe.
        </Text>
      </View>

      <SmallButton onPressAction={handleStart} />
    </View>
  );
}