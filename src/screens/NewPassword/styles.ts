import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: theme.colors.background
  },
  content: {
    marginTop: 30,
    paddingHorizontal: 20
  },
  footer: {
    marginTop: 'auto', 
    paddingHorizontal: 20
  }
});