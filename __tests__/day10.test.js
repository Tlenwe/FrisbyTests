const frisby = require('frisby');
const BASE_URL = "https://04c7d89f-530e-4df5-acec-da25e03b40e0.mock.pstmn.io"

describe('Postman API: Day 10', () => {
    it('Mock call 1 ', function () {
        return frisby.get(BASE_URL + `?code=TL`)
            .expect('status', 200)
            .expect('json', 'stats', {
                "percentage": "58.33",
                "count": "132"})
    });

    it('Mock call 2 ', function () {
        return frisby.get(BASE_URL + `?code=VER`)
            .expect('status', 200)
            .expect('json', 'stats', {
                "percentage": "57.76",
                "count": "161"})
    });
})