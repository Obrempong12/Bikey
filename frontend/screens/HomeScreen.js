// screens/HomeScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, Alert } from 'react-native';
import axios from 'axios';
import LoadingIndicator from '../components/LoadingIndicator';

const HomeScreen = ({ route, navigation }) => {
  const [rides, setRides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { token } = route.params;

  useEffect(() => {
    const fetchRides = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/api/rides/available', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setRides(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load rides');
        setLoading(false);
      }
    };

    fetchRides();
  }, [token]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>;
  }

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
      <Button title="Manage Bookings" onPress={() => navigation.navigate('ManageBookings', { token })} />
    </View>
  );
};

export default HomeScreen;
