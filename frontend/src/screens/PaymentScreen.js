// src/screens/PaymentScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Picker, Alert } from 'react-native';
import styles from '../styles/styles';

const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState('momo');

  const handlePayment = () => {
    Alert.alert(
      'Payment Confirmation',
      `You have chosen to pay with ${paymentMethod === 'momo' ? 'Mobile Money' : 'Bank Visa Card'}`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Confirm', onPress: () => Alert.alert('Payment Successful') },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Complete Your Payment</Text>
      <Text>Select Payment Method:</Text>
      <Picker
        selectedValue={paymentMethod}
        style={localStyles.picker}
        onValueChange={(itemValue) => setPaymentMethod(itemValue)}
      >
        <Picker.Item label="Mobile Money" value="momo" />
        <Picker.Item label="Bank Visa Card" value="visa" />
      </Picker>
      <Button title="Pay Now" onPress={handlePayment} />
    </View>
  );
};

const localStyles = StyleSheet.create({
  picker: {
    height: 50,
    width: 200,
  },
});

export default PaymentScreen;
