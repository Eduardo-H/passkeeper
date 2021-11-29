import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginRight: 10,    
    borderRadius: 30
  },
  active: {
    backgroundColor: theme.colors.primary,
  },
  inactive: {
    backgroundColor: theme.colors.secondary,
  },
  title: {
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    color: theme.colors.text
  }
});