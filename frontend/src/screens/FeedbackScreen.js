// src/screens/FeedbackScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import styles from '../styles/styles';

const FeedbackScreen = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    if (feedback) {
      Alert.alert('Thank you for your feedback!');
      setFeedback('');
    } else {
      Alert.alert('Please provide some feedback before submitting.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Submit Your Feedback</Text>
      <TextInput
        style={localStyles.input}
        placeholder="Write your feedback here..."
        value={feedback}
        onChangeText={setFeedback}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const localStyles = StyleSheet.create({
  input: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
});

export default FeedbackScreen;
