// src/styles/styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF', // White background
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000', // Black text for headers
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFD700', // Yellow for buttons
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000', // Black text for buttons
    fontSize: 16,
  },
  input: {
    borderColor: '#FFD700', // Yellow borders for inputs
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    color: '#000000', // Black text for inputs
  },
  colors: {
    primary: '#FFD700', // Yellow as primary color
    secondary: '#000000', // Black as secondary color
    background: '#FFFFFF', // White background
    textPrimary: '#000000', // Black text
  },
  fontSize: {
    small: 14,
    medium: 18,
    large: 24,
  },
  spacing: {
    small: 10,
    medium: 15,
    large: 20,
  },
});
