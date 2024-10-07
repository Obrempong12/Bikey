// screens/SignInScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password
      });
      // Store token and navigate to home screen.
      const token = response.data.token;
      navigation.navigate('Home', { token });
    } catch (error) {
      Alert.alert('Login failed', 'Invalid credentials');
    }
  };

  return (
    <View style={{ padding: 20 }}>
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
      <Button title="Sign In" onPress={handleSignIn} />
      <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
};

export default SignInScreen;
