// screens/SignUpScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await axios.post('http://localhost:5000/api/users/register', {
        name,
        email,
        password
      });
      Alert.alert('Success', 'You can now log in');
      navigation.navigate('SignIn');
    } catch (error) {
      Alert.alert('Registration failed', 'Please try again');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Name</Text>
      <TextInput 
        value={name} 
        onChangeText={setName} 
        placeholder="Enter your name" 
        style={{ marginBottom: 10, borderBottomWidth: 1 }} 
      />
      <Text>Email</Text>
      <TextInput 
        value={email} 
        onChangeText={setEmail} 
        placeholder="Enter your email" 
        style={{ marginBottom: 10, borderBottomWidth: 1 }} 
      />
      <Text>Password</Text>
      <TextInput 
        value={password} 
        onChangeText={setPassword} 
        placeholder="Enter your password" 
        secureTextEntry 
        style={{ marginBottom: 20, borderBottomWidth: 1 }} 
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

export default SignUpScreen;
