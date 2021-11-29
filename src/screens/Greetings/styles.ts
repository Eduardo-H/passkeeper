import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: theme.colors.background
  },
  title: {
    fontSize: 22,
    fontFamily: theme.fonts.text600,
    color: theme.colors.text,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: theme.fonts.text400,
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: 20
  }
});