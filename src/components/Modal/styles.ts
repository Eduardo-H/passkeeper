import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingHorizontal: 20
  },
  modalView: {
    width: '100%',
    height: '50%',
    backgroundColor: theme.colors.background,
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: theme.fonts.text500,
    color: theme.colors.text,
    textAlign: "center"
  },
  list: {
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 20
  },
  cancelButton: {
    marginTop: 10
  },
  cancelButtonText: {
    fontSize: 14,
    fontFamily: theme.fonts.text400,
    color: theme.colors.text
  }
});