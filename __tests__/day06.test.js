const frisby = require('frisby');


describe('Postman API: Day 06', () => {

    it('Status code is 200', function () {
        return frisby.get('https://icanhazdadjoke.com/')
            .expect('status', 200)
    });

    // skipped because expecting test dawning
    it.skip('Expected a 404', function () {
        return frisby.get('https://icanhazdadjoke.com/')
            .expect('status', 404)
    });
})
