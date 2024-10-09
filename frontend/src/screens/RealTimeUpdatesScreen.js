// src/screens/RealTimeUpdatesScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../styles/styles';

const RealTimeUpdatesScreen = () => {
  const [rideStatus, setRideStatus] = useState({
    estimatedArrival: '10 minutes',
    distance: '3km',
    price: 'GHS 15',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulating real-time update (in real-world apps, you might use WebSocket or API)
      setRideStatus((prevState) => ({
        ...prevState,
        estimatedArrival: Math.max(parseInt(prevState.estimatedArrival) - 1, 0) + ' minutes',
        price: 'GHS ' + (parseInt(prevState.price.split(' ')[1]) + 1),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Real-Time Ride Updates</Text>
      <View style={localStyles.statusContainer}>
        <Text style={localStyles.text}>Estimated Arrival: {rideStatus.estimatedArrival}</Text>
        <Text style={localStyles.text}>Distance: {rideStatus.distance}</Text>
        <Text style={localStyles.text}>Price: {rideStatus.price}</Text>
      </View>
    </View>
  );
};

const localStyles = StyleSheet.create({
  statusContainer: {
    backgroundColor: '#FFF9C4', // Light yellow
    padding: 20,
    borderRadius: 8,
    marginVertical: 15,
  },
  text: {
    color: styles.colors.textPrimary,
    fontSize: styles.fontSize.medium,
    marginBottom: styles.spacing.small,
  },
});

export default RealTimeUpdatesScreen;
