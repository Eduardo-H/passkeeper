import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 20
  },
  title: {
    fontSize: 18,
    fontFamily: theme.fonts.text400,
    paddingLeft: 20,
    marginBottom: 10
  },
  list: {
    paddingLeft: 20
  }
});