# Bikey - Safe Motorbike Rides App
---
Bikey is a mobile application designed to connect passengers with motorbike riders, ensuring safe and convenient rides. Users can book rides, track motorbikes in real-time, and securely pay using Mobile Money (MoMo) or Bank Visa Cards. Bikey focuses on safety by tracking riders and offering an emergency alert system in case of theft or emergencies.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [License](#license)

## Project Overview

Bikey aims to provide a secure and reliable solution for motorbike transportation. The app is developed for mobile users who prefer quick, cashless transactions and real-time ride tracking to ensure their safety.

## Features
- **Real-time GPS Tracking:** Passengers can track motorbikes from booking until arrival.
- **Cashless Payments:** Payments through Mobile Money (MoMo) and Bank Visa Cards.
- **User & Rider Profiles:** Both passengers and riders have detailed profiles with ratings.
- **Emergency Alerts:** An emergency feature for security and monitoring.

## Technologies Used
- **Frontend:** React Native (for mobile development)
- **Backend:** Node.js/Express or Python/Django for API development
- **Database:** PostgreSQL or MongoDB
- **Payment Integration:** Paystack, Flutterwave (for Mobile Money and Visa)
- **Real-time Tracking:** Google Maps API or OpenStreetMap
- **Notifications:** Firebase for push notifications
- **Authentication:** JSON Web Tokens (JWT) for secure user management

## Installation

To run the Bikey app locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Obrempong12/Bikey.git
   ```
2. Navigate to the project directory:
   ```bash
   cd BikeyApp
   ```
3. Install dependencies for the backend and mobile app:
   - Backend:
     ```bash
     cd backend
     npm install
     ```
   - Mobile App:
     ```bash
     cd mobile
     npm install
     ```
4. Set up environment variables for both the backend and mobile app (e.g., Google Maps API key, Paystack/Flutterwave keys, Firebase credentials).
5. Start the backend server:
   ```bash
   npm run start
   ```
6. Run the mobile app (iOS or Android emulator):
   ```bash
   npm run android   # for Android
   npm run ios       # for iOS
   ```

## Usage

- **Sign Up/Login:** New users can sign up using their phone number or email.
- **Book a Ride:** Select pickup and drop-off locations on the map.
- **Track Rider:** Monitor the motorbike's movement in real time as it heads toward you.
- **Payment:** Pay for your ride using Mobile Money or Bank Visa cards.
- **Rate Ride:** Provide feedback on your experience with the rider.

## Contributors

- [Peter Kwesi Obrempong Stephenson](https://github.com/Obrempong12) - Lead Developer & Backend Engineer

## License

This project is licensed under the **MIT License**.

The project is developed as part of the **Holberton School** and **ALx Africa** curriculum, a full-stack software engineering program aimed at training the next generation of tech leaders.

```

### MIT License

MIT License for open-source contributions.

```
