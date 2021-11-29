import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20
  },
  content: {
    flex: 1,
    marginTop: 30,
    paddingHorizontal: 20
  },
  darkSwitch: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  darkSwitchText: {
    fontSize: 14,
    fontFamily: theme.fonts.text400
  },
  switch: {}
});