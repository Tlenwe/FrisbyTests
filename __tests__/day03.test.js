const frisby = require('frisby');
const baseURL = 'https://postman-echo.com'

describe('Postman API: Day 03', () => {
    it('raw JSON body', function () {
        return frisby
            .post(`${baseURL}/post`, {'data': 'doodles'})
            .expect('status', 200)
            .expect('json', 'data', {'data': 'doodles'})
    });
})
