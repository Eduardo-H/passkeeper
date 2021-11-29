import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 15
  },
  label: {
    fontSize: 14,
    fontFamily: theme.fonts.text400
  },
  text: {
    fontSize: 14,
    fontFamily: theme.fonts.text400
  },
  input: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 8
  }
});