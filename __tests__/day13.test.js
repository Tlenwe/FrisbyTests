const frisby = require('frisby');
const BASE_URL = "https://swapi.dev/api"

describe('Postman API: Day 13', () => {

    it('Body contains "Tatooine"', function () {
        return frisby.get(`${BASE_URL}/planets`)
            .expect('status', 200)
            .expect('bodyContains', 'Tatooine')
    });

    it('Talls count', function () {
        return frisby.get(`${BASE_URL}/species?page=1`)
            .expect('status', 200)
            .expect('bodyContains', 'Ewokese')
            .then((result) => {
                let talls = 0
                result.json.results.forEach((res) => {
                    if (parseInt(res['average_height'], 10) > 100) {
                        talls +=1}
                })
                expect(talls).toBe(7)
            })
    });
})