// src/screens/RideTrackingScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import styles from '../styles/styles';

const RideTrackingScreen = () => {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
      },
      (error) => console.error(error),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Track Your Ride</Text>
      <MapView
        style={localStyles.map}
        region={location}
        showsUserLocation={true}
      >
        <Marker coordinate={location} title="You" />
        {/* Add other markers for the ride */}
      </MapView>
      <Button title="Refresh Location" onPress={() => Geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          });
        },
        (error) => console.error(error),
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      )} />
    </View>
  );
};

const localStyles = StyleSheet.create({
  map: {
    width: '100%',
    height: '80%',
  },
});

export default RideTrackingScreen;
