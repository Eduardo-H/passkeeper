import React from 'react';
import { Text, View } from 'react-native';

import SecurityLightSvg from '../../assets/light/security.svg';
import SecurityDarkSvg from '../../assets/dark/security.svg';
import { SmallButton } from '../../components/SmallButton';

import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../hooks/useTheme';

export function Disclaimer() {
  const navigation = useNavigation();
  const { theme } = useTheme();

  function handleStart() {
    navigation.navigate('UserRegister');
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>
        PassKeeper
      </Text>

      <View>
        <Text style={[styles.text, { color: theme.text }]}>
          Your passwords are saved in your {'\n'}
          device, after being encrypted, of course. 
        </Text>

        {
          theme.theme_type === 'light'
          ? <SecurityLightSvg 
            style={styles.illustration}
            width={300} 
            height={220} 
          />
          : <SecurityDarkSvg 
            style={styles.illustration}
            width={300} 
            height={220} 
          />
        }

        <Text style={[styles.text, { color: theme.text }]}>
          No data is sent to the internet, so {'\n'}
          you’re safe.
        </Text>
      </View>

      <SmallButton onPressAction={handleStart} />
    </View>
  );
}