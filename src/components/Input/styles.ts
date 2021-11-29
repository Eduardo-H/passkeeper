import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 15
  },
  label: {
    fontSize: 14,
    fontFamily: theme.fonts.text400,
    color: theme.colors.label
  },
  input: {
    height: 50,
    paddingHorizontal: 15,
    fontSize: 14,
    fontFamily: theme.fonts.text400,
    color: theme.colors.text,
    textDecorationColor: theme.colors.text,
    backgroundColor: theme.colors.input,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.colors.secondary
  },
  invalid: {
    borderColor: theme.colors.invalid
  },
  invalidText: {
    fontSize: 12,
    fontFamily: theme.fonts.text400,
    color: theme.colors.invalid,
    marginTop: 5
  }
});