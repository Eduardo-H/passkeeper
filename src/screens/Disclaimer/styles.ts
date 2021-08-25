import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 50,
    backgroundColor: theme.colors.background
  },
  title: {
    fontSize: 24,
    fontFamily: theme.fonts.text600,
    color: theme.colors.text
  },
  illustration: {
    marginVertical: 25
  },
  text: {
    fontSize: 16,
    fontFamily: theme.fonts.text400,
    color: theme.colors.text,
    textAlign: 'center'
  }
})