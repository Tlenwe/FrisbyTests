const frisby = require('frisby');
const baseURL = 'https://postman-echo.com'

describe('Postman API: Day 02', () => {

    it('Post raw text', function () {
        return frisby
            .post(`${baseURL}/post`)
            .expect('status', 200);
    });

    it('GET with query params', function () {
        return frisby
            .get(`${baseURL}/get?name=Sergio&surname=Perez`)
            .expect('status', 200)
            .expect('json', 'args', {'name': 'Sergio', 'surname': 'Perez'})
    });
})
