// src/screens/AvailableRidesScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../styles/styles';

const availableRidesData = [
  { id: '1', rider: 'John Doe', distance: '2km', price: 'GHS 8' },
  { id: '2', rider: 'Samuel Yeboah', distance: '3.5km', price: 'GHS 12' },
  { id: '3', rider: 'Ama Asante', distance: '1km', price: 'GHS 5' },
];

const AvailableRidesScreen = ({ navigation }) => {
  const handleSelectRide = (ride) => {
    // Logic for selecting a ride
    navigation.navigate('RideDetails', { ride });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={localStyles.rideItem} onPress={() => handleSelectRide(item)}>
      <Text style={localStyles.text}>Rider: {item.rider}</Text>
      <Text style={localStyles.text}>Distance: {item.distance}</Text>
      <Text style={localStyles.text}>Price: {item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Rides</Text>
      <FlatList
        data={availableRidesData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const localStyles = StyleSheet.create({
  rideItem: {
    backgroundColor: '#FFF9C4', // Light yellow for ride items
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
  },
  text: {
    color: styles.colors.textPrimary,
    fontSize: styles.fontSize.medium,
  },
});

export default AvailableRidesScreen;
