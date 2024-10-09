// src/App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RideHistoryScreen from './screens/RideHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import AvailableRidesScreen from './screens/AvailableRidesScreen';
import RideTrackingScreen from './screens/RideTrackingScreen';
import RealTimeUpdatesScreen from './screens/RealTimeUpdatesScreen';
import InAppNotificationsScreen from './screens/InAppNotificationsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="AvailableRides" component={AvailableRidesScreen} />
        <Stack.Screen name="RideHistory" component={RideHistoryScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="RideTracking" component={RideTrackingScreen} />
        <Stack.Screen name="RealTimeUpdates" component={RealTimeUpdatesScreen} />
        <Stack.Screen name="InAppNotifications" component={InAppNotificationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
