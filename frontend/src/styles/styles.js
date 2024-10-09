// src/styles/styles.js
import { StyleSheet } from 'react-native';
import theme from './theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background, // White background
    padding: theme.spacing.medium,
  },
  header: {
    fontSize: theme.fontSize.large,
    color: theme.colors.textPrimary, // Black header text
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: theme.colors.primary, // Yellow button background
    paddingVertical: theme.spacing.medium,
    paddingHorizontal: theme.spacing.large,
    borderRadius: theme.buttonRadius,
    alignItems: 'center',
  },
  buttonText: {
    color: theme.colors.buttonText, // White text on buttons
    fontSize: theme.fontSize.medium,
  },
  textInput: {
    borderWidth: 1,
    borderColor: theme.colors.secondary, // Black border for input fields
    padding: theme.spacing.small,
    borderRadius: theme.buttonRadius,
    color: theme.colors.textPrimary, // Black text
    marginBottom: theme.spacing.medium,
  },
});

export default styles;
