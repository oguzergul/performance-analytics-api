const request = require("supertest");
const mongoose = require('mongoose');
const dbConfig = require('../config/database.config');

const PORT = process.env.PORT || "http://localhost:3000";

beforeEach((done) => {
    mongoose.connect(dbConfig.url,
        {useNewUrlParser: true, useUnifiedTopology: true}, () => done());
});

afterEach((done) => {
    mongoose.connection.close(() => done())
});

const mockReport = {
    files: [],
    measurement_date: '',
    user_agent: 'Mozilla/5.0 (X11; Linux x86_64)',
    ttfbTime: 19,
    fcpTime: 31,
    domLoadTime: 23,
    windowLoadTime: 234,
    resourcesLoadTime: 234,
    url: 'http://localhost:3002/',
}

describe('Analytics API', () => {
    it('should get all data from api', async () => {
        const response = await request(PORT).get('/performance');
        expect(response.status).toEqual(200)
        expect(Array.isArray(response.body)).toBeTruthy();
    });

    it('should return last 30 minutes data', async () => {
        const response = await request(PORT).get('/');
        const data = response.body.slice(-1)[0].measurement_date;
        const minDate = new Date(new Date().getTime() - 1000 * 60 * 30);
        expect(new Date(data) > new Date(minDate)).toEqual(true);
    });

    it('should get specific dates data from api', async () => {
        const response = await request(PORT).get(`/performance/?min=2021-10-01T17:31&max=2021-10-23T17:31`);
        expect(response.status).toEqual(200);
        expect(Array.isArray(response.body)).toBeTruthy()
    });

    it('should create new performance record', async () => {
        const response = await request(PORT).post('/analytics').send(mockReport);
        expect(response.status).toEqual(200);
    });

    it('should send status:500 when invalid req', async () => {
        const response = await request(PORT).post('/analytics').send({
            one: 'first dummy data',
            two: 'second dummy data'
        });
        expect(response.status).toEqual(400);
    });

})

