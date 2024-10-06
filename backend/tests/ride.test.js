const request = require('supertest');
const app = require('../server'); // Adjust path as per your project structure

describe('Ride API Tests', () => {
    let token = '';

    // First, we need to login to get the token.
    beforeAll(async () => {
        const loginRes = await request(app)
            .post('/api/users/login')
            .send({
                email: 'test@example.com',
                password: 'password123'
            });

        token = loginRes.body.token;
    });

    it('should book a ride', async () => {
        const res = await request(app)
            .post('/api/rides/book')
            .set('Authorization', `Bearer ${token}`)  // Include the token.
            .send({
                pickupLocation: 'Location A',
                destination: 'Location B'
            });

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('ride');
    });
});
