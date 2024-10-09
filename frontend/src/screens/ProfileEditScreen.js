// src/screens/ProfileEditScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import styles from '../styles/styles';

const ProfileEditScreen = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('0240000000');

  const handleSave = () => {
    Alert.alert('Profile Updated', `Name: ${name}\nEmail: ${email}\nPhone: ${phone}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Your Profile</Text>
      <TextInput
        style={localStyles.input}
        value={name}
        onChangeText={setName}
        placeholder="Name"
      />
      <TextInput
        style={localStyles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={localStyles.input}
        value={phone}
        onChangeText={setPhone}
        placeholder="Phone"
        keyboardType="phone-pad"
      />
      <Button title="Save Changes" onPress={handleSave} />
    </View>
  );
};

const localStyles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
  },
});

export default ProfileEditScreen;
