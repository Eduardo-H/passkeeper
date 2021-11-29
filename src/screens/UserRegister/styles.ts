import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: getStatusBarHeight() + 30,
    paddingBottom: 30,
    backgroundColor: theme.colors.background
  },
  title: {
    fontSize: 22,
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
    fontSize: 16,
    fontFamily: theme.fonts.text400,
    textAlign: 'center',
    color: theme.colors.text,
    marginBottom: 5
  },
  input: {
    height: 50,
    paddingHorizontal: 15,
    backgroundColor: theme.colors.input,
    fontSize: 14,
    fontFamily: theme.fonts.text400,
    color: theme.colors.text,
    textAlign: 'center',
    textDecorationColor: theme.colors.text,
    borderWidth: 1,
    borderColor: theme.colors.secondary,
    borderRadius: 8
  }
});