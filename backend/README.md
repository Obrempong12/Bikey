Here's a **README.md** file that describes only the backend portion of the Bikey project:

---

# Bikey - Backend API

Welcome to the **Bikey Backend API**, a core component of the Bikey application. This backend serves as the server-side application to handle all user requests, process ride bookings, manage profiles, track rides, and provide other core functionalities. The API is built using Node.js and Express, and it interacts with a MongoDB database for data persistence.

## Project Overview

The Bikey Backend API allows users to:
- Sign up and authenticate using JWT tokens.
- Request available motorcycle rides.
- Book, cancel, and track rides.
- Manage and update user profiles.
- Securely handle payments with Mobile Money (MoMo) and Bank Visa Cards.

---

## Key Features

- **Authentication & Authorization**: Secured endpoints with JWT to protect user data.
- **Ride Booking System**: Users can book motorcycle rides and track their status.
- **Payment Integration**: The API supports Mobile Money (MoMo) and Bank Visa Card payments.
- **Profile Management**: Users can view and update their profile information.
- **Error Handling**: Graceful error responses for invalid requests and failed operations.
- **Security**: Passwords are hashed, and sensitive data is handled securely.

---

## API Endpoints

### **Authentication**
| Method | Endpoint            | Description                  |
|--------|---------------------|------------------------------|
| POST   | `/api/auth/register` | Register a new user           |
| POST   | `/api/auth/login`    | Login and retrieve JWT token  |

### **Ride Management**
| Method | Endpoint                  | Description                     |
|--------|---------------------------|---------------------------------|
| GET    | `/api/rides/available`     | Fetch available rides            |
| POST   | `/api/rides/book/:rideId`  | Book a ride by ride ID           |
| DELETE | `/api/rides/cancel/:rideId`| Cancel a ride by ride ID         |

### **Profile Management**
| Method | Endpoint              | Description                     |
|--------|-----------------------|---------------------------------|
| GET    | `/api/users/profile`   | Fetch user profile              |
| PUT    | `/api/users/profile`   | Update user profile             |

### **Payment**
| Method | Endpoint                   | Description                     |
|--------|----------------------------|---------------------------------|
| POST   | `/api/payments/momo`        | Mobile Money (MoMo) payment      |
| POST   | `/api/payments/visa`        | Visa Card payment               |

---

## Installation & Setup

### Prerequisites

- **Node.js**: Version 14.x or higher
- **MongoDB**: A MongoDB instance to store data (local or cloud)
- **NPM**: Node package manager to install dependencies

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Obrempong12/Bikey.git
   cd Bikey/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root of the `backend` directory with the following:
   ```bash
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. Run in development mode:
   ```bash
   npm run dev
   ```

6. Access the API at `http://localhost:5000`.

---

## Testing

The backend includes unit and integration tests. To run the tests, execute:

```bash
npm test
```

This will run all tests located in the `__tests__` directory using Jest.

---

## Technologies Used

- **Node.js**: Runtime environment for JavaScript.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: NoSQL database for storing ride and user data.
- **Mongoose**: MongoDB object modeling for Node.js.
- **JWT**: JSON Web Token for user authentication.
- **Jest**: Testing framework for unit and integration tests.
- **Axios**: HTTP client for making API requests.
  
---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

Additionally, the project is part of the **Holberton School** and **ALx Africa** curriculum.

---

## Contributors

- **Peter Kwesi Obrempong Stephenson** - [GitHub Profile](https://github.com/Obrempong12/)

---

Feel free to contribute or report any issues!
