import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    marginRight: 3
  }
});