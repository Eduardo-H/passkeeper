import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.green500,
    borderRadius: 12,
    padding: 6,
  },
  buttonIcon: {
    fontSize: 40,
    color: theme.colors.gray800
  }
});