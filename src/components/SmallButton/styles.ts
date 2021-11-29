import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    borderRadius: 12,
    padding: 12,
  },
  buttonIcon: {
    fontSize: 30,
    color: theme.colors.text
  }
});