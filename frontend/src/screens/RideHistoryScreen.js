// src/screens/RideHistoryScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import styles from '../styles/styles'; // Global styles

const rideHistoryData = [
  { id: '1', date: '2024-10-01', time: '14:00', distance: '5km', cost: 'GHS 15' },
  { id: '2', date: '2024-10-02', time: '09:30', distance: '3km', cost: 'GHS 10' },
  { id: '3', date: '2024-10-03', time: '16:45', distance: '7km', cost: 'GHS 20' },
];

const RideHistoryScreen = () => {
  const renderItem = ({ item }) => (
    <View style={localStyles.historyItem}>
      <Text style={localStyles.text}>{item.date} - {item.time}</Text>
      <Text style={localStyles.text}>Distance: {item.distance}</Text>
      <Text style={localStyles.text}>Cost: {item.cost}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ride History</Text>
      <FlatList
        data={rideHistoryData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const localStyles = StyleSheet.create({
  historyItem: {
    backgroundColor: '#FFF9C4', // Light yellow for history items
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
  },
  text: {
    color: styles.colors.textPrimary,
    fontSize: styles.fontSize.medium,
  },
});

export default RideHistoryScreen;
