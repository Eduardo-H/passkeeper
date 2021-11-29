import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: theme.colors.secondary,
    borderRadius: 8,
    marginBottom: 10
  },
  title: {
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    color: theme.colors.text,
  }
});