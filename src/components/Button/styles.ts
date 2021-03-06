import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 8    
  },
  title: {
    fontSize: 16,
    fontFamily: theme.fonts.text500,
    color: theme.colors.contrastText,
    lineHeight: 25
  }
});