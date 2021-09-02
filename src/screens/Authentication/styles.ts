import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: theme.colors.background
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontFamily: theme.fonts.text600,
    color: theme.colors.text,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    fontFamily: theme.fonts.text400,
    color: theme.colors.text,
    textAlign: 'center'
  },
  illustration: {
    marginTop: 30
  }
});