import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10
  },
  dot: {
    width: 6,
    height: 6,
    backgroundColor: theme.colors.text,
    borderRadius: 3,
    marginRight: 3
  }
});