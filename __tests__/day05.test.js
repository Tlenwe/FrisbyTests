const frisby = require('frisby');
const currency = 'usd'
const baseURL = 'https://api.coindesk.com'

describe('Postman API: Day 05', () => {
    it('Get request with global variables', function () {
        return frisby
            .get(`${baseURL}/v1/bpi/currentprice/${currency}.json`)
            .expect('status', 200)
            .expect('bodyContains', currency.toUpperCase())
    });
})
