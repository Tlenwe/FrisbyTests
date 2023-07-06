const frisby = require('frisby');
const {faker} = require('@faker-js/faker')

describe('Postman API: Day 25', () => {
    it('Random color payload', async () => {
        let randHex = faker.color.rgb()
        let ColorApiResponse = await frisby.get(`https://www.thecolorapi.com/id?hex=${randHex.replace('#', '')}`).expect('status', 200)
        let hexValue = ColorApiResponse.json.hex.value
        let rgbValue = ColorApiResponse.json.rgb.value
        let nameValue = ColorApiResponse.json.name.value
        const payload = {
            'hex': hexValue,
            'rgb': rgbValue,
            'name': nameValue
        }
        let echoApiResponse = await frisby.post(`https://postman-echo.com/post`, {body:payload}).expect('status', 200)
        expect(echoApiResponse.json.data.hex).toBe(randHex.toUpperCase())
    });
})