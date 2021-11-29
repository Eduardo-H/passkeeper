import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: getStatusBarHeight() + 30,
    paddingBottom: 30
  },
  title: {
    fontSize: 22,
    fontFamily: theme.fonts.text600
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
    marginBottom: 5
  },
  input: {
    height: 50,
    paddingHorizontal: 15,
    fontSize: 14,
    fontFamily: theme.fonts.text400,
    color: theme.colors.text,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 8
  }
});