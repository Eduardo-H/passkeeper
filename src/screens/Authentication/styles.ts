import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 22,
    fontFamily: theme.fonts.text600,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 14,
    fontFamily: theme.fonts.text400,
    textAlign: 'center'
  },
  illustration: {
    marginTop: 30
  }
});