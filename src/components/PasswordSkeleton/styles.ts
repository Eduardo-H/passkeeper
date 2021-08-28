import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 110,
    backgroundColor: theme.colors.secondary,
    marginBottom: 20,
    paddingHorizontal: 25,
    borderRadius: 15,
  }
});