// screens/ManageBookingsScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, Alert } from 'react-native';
import axios from 'axios';

const ManageBookingsScreen = ({ route }) => {
  const [bookings, setBookings] = useState([]);
  const { token } = route.params;

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/rides/bookings', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings', error);
      }
    };

    fetchBookings();
  }, [token]);

  const handleCancelBooking = async (bookingId) => {
    try {
      await axios.delete(`http://localhost:5000/api/rides/cancel/${bookingId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      Alert.alert('Success', 'Booking canceled successfully');
      // Refresh the list of bookings
      fetchBookings();
    } catch (error) {
      Alert.alert('Error', 'Failed to cancel booking');
    }
  };

  const renderBooking = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1 }}>
      <Text>Pickup: {item.pickupLocation}</Text>
      <Text>Destination: {item.destination}</Text>
      <Text>Status: {item.status}</Text>
      {item.status === 'booked' && (
        <Button title="Cancel Ride" onPress={() => handleCancelBooking(item._id)} />
      )}
    </View>
  );

  return (
    <View style={{ padding: 20 }}>
      <Text>Manage Bookings:</Text>
      <FlatList 
        data={bookings} 
        renderItem={renderBooking} 
        keyExtractor={(item) => item._id} 
      />
    </View>
  );
};

export default ManageBookingsScreen;
