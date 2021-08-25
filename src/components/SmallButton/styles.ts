import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    borderRadius: 12,
    padding: 6,
  },
  buttonIcon: {
    fontSize: 40,
    color: theme.colors.text
  }
});