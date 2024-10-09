// src/App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import AvailableRidesScreen from './screens/AvailableRidesScreen';
import RideHistoryScreen from './screens/RideHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import ProfileEditScreen from './screens/ProfileEditScreen';
import RideTrackingScreen from './screens/RideTrackingScreen';
import RealTimeUpdatesScreen from './screens/RealTimeUpdatesScreen';
import InAppNotificationsScreen from './screens/InAppNotificationsScreen';
import PaymentScreen from './screens/PaymentScreen';
import FeedbackScreen from './screens/FeedbackScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="AvailableRides" component={AvailableRidesScreen} />
        <Stack.Screen name="RideHistory" component={RideHistoryScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ProfileEdit" component={ProfileEditScreen} />
        <Stack.Screen name="RideTracking" component={RideTrackingScreen} />
        <Stack.Screen name="RealTimeUpdates" component={RealTimeUpdatesScreen} />
        <Stack.Screen name="InAppNotifications" component={InAppNotificationsScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Feedback" component={FeedbackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
