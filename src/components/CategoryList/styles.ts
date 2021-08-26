import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: theme.fonts.text400,
    color: theme.colors.text,
    paddingLeft: 30,
    marginTop: 20,
    marginBottom: 10
  },
  list: {
    paddingLeft: 30,
  }
});