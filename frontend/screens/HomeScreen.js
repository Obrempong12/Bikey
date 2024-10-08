// screens/HomeScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, Alert } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ route, navigation }) => {
  const [rides, setRides] = useState([]);
  const { token } = route.params;

  useEffect(() => {
    const fetchRides = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/rides/available', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setRides(response.data);
      } catch (error) {
        console.error('Error fetching rides', error);
      }
    };

    fetchRides();
  }, [token]);

  const handleBookRide = async (rideId) => {
    try {
      await axios.post(
        `http://localhost:5000/api/rides/book/${rideId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      Alert.alert('Success', 'Ride booked successfully!');
      // Refresh the list of available rides.
      fetchRides();
    } catch (error) {
      Alert.alert('Booking failed', 'Please try again');
    }
  };

  const renderRide = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1 }}>
      <Text>Pickup: {item.pickupLocation}</Text>
      <Text>Destination: {item.destination}</Text>
      <Text>Status: {item.status}</Text>
      {item.status === 'available' && (
        <Button title="Book Ride" onPress={() => handleBookRide(item._id)} />
      )}
    </View>
  );

  return (
    <View style={{ padding: 20 }}>
      <Text>Available Rides:</Text>
      <FlatList 
        data={rides} 
        renderItem={renderRide} 
        keyExtractor={(item) => item._id} 
      />
      <Button title="View Profile" onPress={() => navigation.navigate('Profile', { token })} />
      <Button title="Ride History" onPress={() => navigation.navigate('RideHistory', { token })} />
    </View>
  );
};

export default HomeScreen;
