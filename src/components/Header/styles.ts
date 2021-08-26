import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles =  StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 30
  },
  greeting: {
    fontSize: 18,
    fontFamily: theme.fonts.text400,
    color: theme.colors.text,
    lineHeight: 28
  },
  username: {
    fontSize: 22,
    fontFamily: theme.fonts.text600,
    color: theme.colors.text,
    lineHeight: 24
  }
});