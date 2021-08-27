import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight(),
    backgroundColor: theme.colors.background
  },
  info: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontFamily: theme.fonts.text500,
    color: theme.colors.text
  },
  count: {
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    color: theme.colors.text
  },
  empty: {
    alignItems: 'center',
    marginTop: 30
  },
  emptyText: {
    fontSize: 16,
    fontFamily: theme.fonts.text500,
    color: theme.colors.text,
    textAlign: 'center',
    marginTop: 10
  }
});