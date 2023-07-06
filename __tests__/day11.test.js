const frisby = require('frisby');
const BASE_URL = "https://water-ttl.herokuapp.com"

describe('Postman API: Day 11', () => {

    it('should i water the plants?', function () {
        return frisby
            .get(`${BASE_URL}/hygrometer`)
            .expect('status', 200)
            .then((result) => {
                let level = result.json.level
                if (level<60) {
                    console.warn('your plant needs water!')
                    return frisby.post(`${BASE_URL}/water`)
                        .expect('status', 200)
                } else {
                    console.info('your plant is ok!')
                }
            })

    });
})