import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 110,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    borderRadius: 15
  },
  info: {
    flex: 1
  },
  title: {
    fontSize: 18,
    fontFamily: theme.fonts.text600
  },
  password: {
    fontSize: 15,
    fontFamily: theme.fonts.text400
  },
  visibility: {
    padding: 8,
    borderRadius: 40
  }
});