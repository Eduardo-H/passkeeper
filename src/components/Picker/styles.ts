import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 15
  },
  label: {
    fontSize: 16,
    fontFamily: theme.fonts.text400,
    color: theme.colors.label
  },
  text: {
    fontSize: 16,
    fontFamily: theme.fonts.text400,
    color: theme.colors.text
  },
  input: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: theme.colors.input,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.colors.secondary    
  }
});