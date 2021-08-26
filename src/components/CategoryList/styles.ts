import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 20
  },
  title: {
    fontSize: 20,
    fontFamily: theme.fonts.text400,
    color: theme.colors.text,
    paddingLeft: 30,
    marginBottom: 10
  },
  list: {
    paddingLeft: 30
  }
});