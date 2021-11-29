import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: getStatusBarHeight() + 30,
    paddingBottom: 30
  },
  title: {
    fontSize: 22,
    fontFamily: theme.fonts.text600
  },
  illustration: {
    marginVertical: 25
  },
  text: {
    fontSize: 14,
    fontFamily: theme.fonts.text400,
    textAlign: 'center'
  }
})