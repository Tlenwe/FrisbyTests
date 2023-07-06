const frisby = require('frisby');
const BASE_URL = "http://xkcd.com"
let page = 397
let status = 200
jest.setTimeout(10000000);

describe('Postman API: Day 16', () => {
    it('xkcd', async () => {
        while (status == 200) {
            page++;
            const response = await frisby.get(`${BASE_URL}/${page}/info.0.json`);
            status = response.status;
        }
        console.log(page);
        expect(page).toEqual(404);
    });
});