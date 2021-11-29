import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/themes';

export const styles =  StyleSheet.create({
  container: {
    width: '100%',
    height: 120,
    flexDirection: 'row',
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 30,
    paddingTop: getStatusBarHeight()
  },
  greeting: {
    fontSize: 16,
    fontFamily: theme.fonts.text400,
    color: theme.colors.contrastText,
    lineHeight: 28
  },
  username: {
    fontSize: 20,
    fontFamily: theme.fonts.text600,
    color: theme.colors.contrastText,
    lineHeight: 22
  },
  settingsButton: {
    padding: 8,
    backgroundColor: theme.colors.primary,
    borderRadius: 40
  }
});