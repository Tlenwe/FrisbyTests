const frisby = require('frisby');
const api_key = process.env.API_KEY
const baseURL = 'https://api.getpostman.com'

describe('Postman API: Day 04', () => {

    it('Authorization with header', function () {
        console.log(api_key)
        return frisby
            .setup(
                {request:
                    {headers:
                            {'x-api-key': api_key}}})
            .get(`${baseURL}/collections`)
            .expect('status', 200)
            .then((result) => {
                let collections = result.json.collections;
                let headers_result = ['Collection list']
                collections.forEach(element => headers_result.push(element.name))
                console.log(headers_result)
            })
    });

    it('Authorization with params', function () {
        return frisby
            .get(`${baseURL}/collections?apikey=${api_key}`)
            .expect('status', 200)
            .then((result) => {
                let collections = result.json.collections;
                let headers_result = ['Collection list']
                collections.forEach(element => headers_result.push(element.name))
                console.log(headers_result)
            })
    });

})
