const frisby = require('frisby');
const baseURL = 'https://api.nasa.gov/planetary'

describe('Postman API: Day 07', () => {
    it('apod', function () {
        let apikey = 'DEMO_KEY'
        let count = '10'
        return frisby
            .get(`${baseURL}/apod?api_key=${apikey}&count=${count}`)
            .expect('status', 200)
            .expect('header', 'Content-Type', 'application/json')
            .then((result) => {
                let pics = result.json
                pics.forEach((pic) => {console.warn(pic.date), console.log(pic.title, pic.url)})
            })
    });
})
