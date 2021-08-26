import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 110,
    backgroundColor: theme.colors.secondary,
    marginBottom: 20,
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
    fontSize: 20,
    fontFamily: theme.fonts.text600,
    color: theme.colors.text
  },
  password: {
    fontSize: 15,
    fontFamily: theme.fonts.text400,
    color: theme.colors.text
  },
  dots: {
    fontSize: 17,
    fontFamily: theme.fonts.text400,
    color: theme.colors.text,
  },
  visibility: {
    padding: 8,
    backgroundColor: theme.colors.secondary,
    borderRadius: 40
  }
});