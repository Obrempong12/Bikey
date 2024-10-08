// screens/ProfileScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';
import axios from 'axios';

const ProfileScreen = ({ route, navigation }) => {
  const [profile, setProfile] = useState({});
  const [newPassword, setNewPassword] = useState('');
  const { token } = route.params;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile', error);
      }
    };

    fetchProfile();
  }, [token]);

  const handleChangePassword = async () => {
    try {
      await axios.put(
        'http://localhost:5000/api/users/change-password',
        { password: newPassword },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      Alert.alert('Success', 'Password changed successfully');
      setNewPassword('');
    } catch (error) {
      Alert.alert('Error', 'Failed to change password');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Name: {profile.name}</Text>
      <Text>Email: {profile.email}</Text>
      <TextInput 
        value={newPassword} 
        onChangeText={setNewPassword} 
        placeholder="New Password" 
        secureTextEntry 
        style={{ marginBottom: 20, borderBottomWidth: 1 }} 
      />
      <Button title="Change Password" onPress={handleChangePassword} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ProfileScreen;
