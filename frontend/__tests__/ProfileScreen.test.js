// __tests__/ProfileScreen.test.js

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import axios from 'axios';
import axiosMock from 'axios-mock-adapter';
import ProfileScreen from '../screens/ProfileScreen';

const mock = new axiosMock(axios);

describe('ProfileScreen', () => {
  const token = 'mockToken';

  it('renders profile data and allows updates', async () => {
    const profile = { name: 'John Doe', email: 'john@example.com' };
    mock.onGet('http://localhost:5000/api/users/profile').reply(200, profile);

    const { getByPlaceholderText, getByText } = render(<ProfileScreen route={{ params: { token }}} />);

    await waitFor(() => {
      expect(getByPlaceholderText('Name').props.value).toBe('John Doe');
    });

    fireEvent.changeText(getByPlaceholderText('Name'), 'Jane Doe');
    fireEvent.press(getByText('Update Profile'));

    await waitFor(() => {
      const updateRequest = mock.history.put.find(req => req.url === 'http://localhost:5000/api/users/profile');
      expect(updateRequest.data).toContain('Jane Doe');
    });
  });
});
