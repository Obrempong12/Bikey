// src/screens/ProfileScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../styles/styles';

const ProfileScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Logic for logging out the user.
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>
      
      <Text style={localStyles.label}>Name: Peter Kwesi</Text>
      <Text style={localStyles.label}>Email: peter.kwesi@bikey.com</Text>
      
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const localStyles = StyleSheet.create({
  label: {
    color: styles.colors.textPrimary,
    fontSize: styles.fontSize.medium,
    marginBottom: styles.spacing.medium,
  },
});

export default ProfileScreen;
