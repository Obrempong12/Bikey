// src/screens/InAppNotificationsScreen.js
import React, { useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';
import styles from '../styles/styles';

const InAppNotificationsScreen = () => {
  useEffect(() => {
    Toast.show({
      type: 'success',
      text1: 'Welcome to Bikey!',
      text2: 'Your ride is on the way 🚴‍♂️',
    });
  }, []);

  const handleNotification = () => {
    Toast.show({
      type: 'info',
      text1: 'Ride Status',
      text2: 'Your rider is 2 minutes away',
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Show Ride Notification" onPress={handleNotification} />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

const localStyles = StyleSheet.create({});

export default InAppNotificationsScreen;
