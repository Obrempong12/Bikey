// __tests__/HomeScreen.test.js

import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import axios from 'axios';
import axiosMock from 'axios-mock-adapter';
import HomeScreen from '../screens/HomeScreen';

const mock = new axiosMock(axios);

describe('HomeScreen', () => {
  const token = 'mockToken';
  
  it('displays loading indicator while fetching rides', () => {
    const { getByTestId } = render(<HomeScreen route={{ params: { token }}} />);
    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('displays an error message when API call fails', async () => {
    mock.onGet('http://localhost:5000/api/rides/available').reply(500);

    const { getByText } = render(<HomeScreen route={{ params: { token }}} />);

    await waitFor(() => {
      expect(getByText('Failed to load rides')).toBeTruthy();
    });
  });

  it('renders rides when API call succeeds', async () => {
    const rides = [
      { _id: '1', pickupLocation: 'Location A', destination: 'Location B', status: 'available' },
    ];
    mock.onGet('http://localhost:5000/api/rides/available').reply(200, rides);

    const { getByText } = render(<HomeScreen route={{ params: { token }}} />);

    await waitFor(() => {
      expect(getByText('Pickup: Location A')).toBeTruthy();
    });
  });
});
