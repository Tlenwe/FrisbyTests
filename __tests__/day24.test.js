const randomWords = require('better-random-words');
const moment = require('moment')
const frisby = require('frisby');

describe('Postman API: Day 24', () => {
    it('random word joke', function () {
        let word = randomWords()
        return frisby.get(`https://icanhazdadjoke.com/search?term=${word}`)
            .expect('status', 200)
            .then((result) => {console.log(word)})
    });
    it('moment', async () => {
        const result = await frisby.get('http://worldtimeapi.org/api/ip').expect('status', 200)
        let todayDay = result.json.day_of_week
        console.log(moment().day(todayDay +2).format('dddd'))
    })

})