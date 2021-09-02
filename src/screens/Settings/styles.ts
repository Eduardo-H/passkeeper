import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: theme.colors.background
  },
  content: {
    flex: 1,
    marginTop: 30,
    paddingHorizontal: 20
  }
});