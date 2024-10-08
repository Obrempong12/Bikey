// screens/ProfileScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';
import axios from 'axios';

const ProfileScreen = ({ route, navigation }) => {
  const [profile, setProfile] = useState({});
  const [updatedProfile, setUpdatedProfile] = useState({});
  const [newPassword, setNewPassword] = useState('');
  const { token } = route.params;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setProfile(response.data);
        setUpdatedProfile(response.data);  // Initialize updatedProfile with the current profile details.
      } catch (error) {
        console.error('Error fetching profile', error);
      }
    };

    fetchProfile();
  }, [token]);

  const handleUpdateProfile = async () => {
    try {
      await axios.put(
        'http://localhost:5000/api/users/profile',
        updatedProfile,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      Alert.alert('Success', 'Profile updated successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to update profile');
    }
  };

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
      <TextInput 
        value={updatedProfile.name} 
        onChangeText={(value) => setUpdatedProfile({ ...updatedProfile, name: value })} 
        placeholder="Name" 
        style={{ marginBottom: 20, borderBottomWidth: 1 }} 
      />
      <TextInput 
        value={updatedProfile.email} 
        onChangeText={(value) => setUpdatedProfile({ ...updatedProfile, email: value })} 
        placeholder="Email" 
        style={{ marginBottom: 20, borderBottomWidth: 1 }} 
      />
      <Button title="Update Profile" onPress={handleUpdateProfile} />

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
