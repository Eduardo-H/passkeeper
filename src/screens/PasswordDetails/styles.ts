import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20
  },
  card: {
    width: 'auto',
    marginTop: 20,
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 8
  },
  infoGroup: {
    marginBottom: 5
  },
  label: {
    fontSize: 14,
    fontFamily: theme.fonts.text400,
    lineHeight: 18
  },
  text: {
    fontSize: 16,
    fontFamily: theme.fonts.text500
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20
  },
  button: {
    width: '35%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  updateButton: {
    backgroundColor: theme.colors.primary
  },
  deletButton: {
    backgroundColor: theme.colors.invalid
  },
  buttonText: {
    fontSize: 14,
    fontFamily: theme.fonts.text400
  }
});