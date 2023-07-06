const frisby = require('frisby');
const Joi = frisby.Joi
const BASE_URL = "https://randomuser.me/api"

describe('Postman API: Day 08', () => {

    it('get random user ', function () {
        return frisby
            .get(BASE_URL)
            .expect('status', 200)
            .expect('header', 'Content-Type', 'application/json; charset=utf-8')
    });

    it('get female user', function () {
        return frisby
            .get(BASE_URL + `?gender=female`)
            .expect('status', 200)
            .expect('jsonTypes', {
                'results.0.gender': Joi.string().valid("female")
            })
    });

    it('get french user', function () {
        return frisby
            .get(BASE_URL + `?gender=female&?nat=FR`)
            .expect('status', 200)
            .expect('jsonTypes', {
                'results.0.gender': Joi.string().valid("female")
            })
            .expect('jsonTypes', {
                'results.0.nat': Joi.string().valid("FR")
            })
    });
})
