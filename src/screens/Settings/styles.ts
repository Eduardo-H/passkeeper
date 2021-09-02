import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: theme.colors.background
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontFamily: theme.fonts.text400,
    color: theme.colors.text,
    textAlign: 'center'
  },
  content: {
    flex: 1,
    marginTop: 30,
    paddingHorizontal: 20
  }
});