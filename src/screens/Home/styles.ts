import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  info: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontFamily: theme.fonts.text500
  },
  count: {
    fontSize: 13,
    fontFamily: theme.fonts.text400
  },
  empty: {
    alignItems: 'center',
    marginTop: 30
  },
  emptyText: {
    fontSize: 14,
    fontFamily: theme.fonts.text500,
    textAlign: 'center',
    marginTop: 10
  }
});