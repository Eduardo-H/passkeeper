import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: getStatusBarHeight() + 30,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  title: {
    fontSize: 24,
    fontFamily: theme.fonts.text600,
    color: theme.colors.text
  },
  content: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  form: {
    width: '100%'
  },
  label: {
    fontSize: 20,
    fontFamily: theme.fonts.text400,
    textAlign: 'center',
    color: theme.colors.text,
    marginBottom: 5
  },
  input: {
    height: 56,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: theme.colors.white,
    fontSize: 17,
    fontFamily: theme.fonts.text400,
    color: theme.colors.text,
    textAlign: 'center',
    textDecorationColor: theme.colors.text
  }
});