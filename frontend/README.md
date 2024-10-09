Here's a **README.md** file for only the frontend of the **Bikey** project:

---

# Bikey - Frontend

Welcome to the **Bikey Frontend** application, the user interface for the Bikey mobile platform. This frontend is designed to provide an intuitive and seamless experience for users to interact with the backend API. Built with React Native, it allows users to sign up, book motorcycle rides, manage profiles, and track their rides in real-time, ensuring security and convenience.

## Project Overview

The Bikey Frontend allows users to:
- Sign up and authenticate via mobile.
- View and book available motorcycle rides.
- Monitor ongoing rides in real-time.
- Manage and update user profiles.
- Complete payments using integrated Mobile Money (MoMo) or Visa Cards.

---

## Key Features

- **User Authentication**: Secure user authentication using JWT.
- **Ride Booking Interface**: Simple and responsive UI for booking rides.
- **Real-Time Ride Tracking**: Display of ongoing ride information.
- **Payment Gateway**: Integrated MoMo and Visa payment options for convenience.
- **Profile Management**: Users can view and edit their profiles through an easy-to-use interface.

---

## Technologies Used

- **React Native**: To build a cross-platform mobile application.
- **Redux**: For state management across the app.
- **Axios**: To handle HTTP requests between the frontend and backend.
- **React Navigation**: To manage navigation between different screens in the app.
- **Expo**: For easy development and deployment.
- **Google Maps API**: To integrate location and ride tracking on the map.
- **MoMo & Visa Payment Gateway**: To enable secure payments via mobile money and Visa.

---

## Installation & Setup

### Prerequisites

- **Node.js**: Version 14.x or higher
- **Expo CLI**: To manage the React Native project.
- **Android Studio/Xcode**: For mobile emulation and testing.
- **Mobile Device or Emulator**: To run the mobile application.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Obrempong12/Bikey.git
   cd Bikey/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root of the `frontend` directory with the following:
   ```bash
   API_URL=http://localhost:5000/api
   ```

4. Start the application:
   ```bash
   expo start
   ```

5. Open the app in a mobile emulator (Android/iOS) or scan the QR code to run on your mobile device.

---

## Frontend Structure

The **Bikey Frontend** is structured into various components and pages that interact with each other to provide a smooth user experience.

### Main Pages:

1. **Authentication**:
   - **Login Screen**: To authenticate users with their credentials.
   - **Signup Screen**: To register new users.

2. **Ride Management**:
   - **Available Rides Screen**: To view a list of nearby rides.
   - **Ride Details Screen**: To view detailed ride information before booking.
   - **Ride Tracking Screen**: To track the progress of an ongoing ride.

3. **Profile Management**:
   - **Profile Screen**: To view and edit the user’s profile information.

4. **Payment**:
   - **Payment Screen**: To choose and complete payments using Mobile Money or Visa.

### Core Components:

- **Navigation**: React Navigation for navigating between pages.
- **State Management**: Redux for managing the global state of the application (e.g., user info, ride status).
- **API Communication**: Axios for making HTTP requests to the backend.
- **Location Services**: Google Maps API for tracking and displaying locations.

---

## Testing

To ensure the frontend is working as expected, the following testing procedures are implemented:

1. **Unit Tests**: Each component and page has unit tests to check functionality.
2. **Integration Tests**: End-to-end testing to verify interactions between frontend and backend.

To run tests:
```bash
npm test
```

This will run all tests using Jest and React Native Testing Library.

---

## Future Improvements

- **Push Notifications**: For ride updates and real-time alerts.
- **Language Localization**: Supporting multiple languages for a diverse user base.
- **Dark Mode**: An optional dark theme for the user interface.

---

## License

This project is licensed under the MIT License. See the [LICENSE](../LICENSE) file for details.

Additionally, the project is part of the **Holberton School** and **ALx Africa** curriculum.

---

## Contributors

- **Peter Kwesi Obrempong Stephenson** - [GitHub Profile](https://github.com/Obrempong12/)

---

Feel free to contribute or report any issues!
