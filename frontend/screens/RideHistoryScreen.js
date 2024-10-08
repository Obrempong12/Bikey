// screens/RideHistoryScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

const RideHistoryScreen = ({ route }) => {
  const [rideHistory, setRideHistory] = useState([]);
  const { token } = route.params;

  useEffect(() => {
    const fetchRideHistory = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/rides/history', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setRideHistory(response.data);
      } catch (error) {
        console.error('Error fetching ride history', error);
      }
    };

    fetchRideHistory();
  }, [token]);

  const renderRide = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1 }}>
      <Text>Pickup: {item.pickupLocation}</Text>
      <Text>Destination: {item.destination}</Text>
      <Text>Date: {new Date(item.date).toLocaleDateString()}</Text>
    </View>
  );

  return (
    <View style={{ padding: 20 }}>
      <Text>Ride History:</Text>
      <FlatList 
        data={rideHistory} 
        renderItem={renderRide} 
        keyExtractor={(item) => item._id} 
      />
    </View>
  );
};

export default RideHistoryScreen;
