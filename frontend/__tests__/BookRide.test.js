// __tests__/BookRide.test.js

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import axios from 'axios';
import axiosMock from 'axios-mock-adapter';
import HomeScreen from '../screens/HomeScreen';

const mock = new axiosMock(axios);

describe('BookRide', () => {
  const token = 'mockToken';
  
  it('books a ride when the user clicks Book Ride', async () => {
    const rides = [{ _id: '1', pickupLocation: 'Location A', destination: 'Location B', status: 'available' }];
    mock.onGet('http://localhost:5000/api/rides/available').reply(200, rides);

    const { getByText } = render(<HomeScreen route={{ params: { token }}} />);
    await waitFor(() => expect(getByText('Pickup: Location A')).toBeTruthy());

    fireEvent.press(getByText('Book Ride'));

    await waitFor(() => {
      const bookingRequest = mock.history.post.find(req => req.url.includes('/api/rides/book'));
      expect(bookingRequest.url).toContain('/api/rides/book/1');
    });
  });
});
