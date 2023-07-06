const frisby = require('frisby');
const fs = require("fs");
const path = require("path");
const BASE_URL = "https://postman-echo.com"

const csvPath = path.join(__dirname, './geoMap.csv');
const content = fs.readFileSync(csvPath, 'utf-8');
const splited = content.split('.')
let i = 1

jest.setTimeout(10000000)

describe('Postman API: Day 23', () => {

    it('boba', async ()=> {
        while (i < splited.length) {
            let [region, boba] = splited[i].split(',')
            i++
            const echoApiResponse = await frisby.get(`${BASE_URL}/get?${region}=${boba}`)
        }
        console.log(i)
    });
})