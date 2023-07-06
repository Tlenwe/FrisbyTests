const frisby = require('frisby');
const BASE_URL = "https://api.getpostman.com"

let collectionid = "28167079-25cc5939-fc98-4e61-a89d-f1f64bf17f5b"
let environmentid = "28167079-74af5d03-af0f-4690-a797-8b3d0f970bcd"
let workspaceid = "189f96fa-51e4-4f3e-a0fb-4a5c156f982e"

describe('Postman API: Day 12', () => {

    frisby.globalSetup({
        request: {
            headers: {
                'x-api-key': process.env.API_KEY
            }
        }
    });

    it('get collection', function () {
        return frisby.get(`${BASE_URL}/collections/${collectionid}`)
            .expect('status', 200)
    });

    it('get environment', function () {
        return frisby.get(`${BASE_URL}/environments/${environmentid}`)
            .expect('status', 200)
            .then((result) => {
                expect(result.json.environment['values'].length).toBe(4)
            })
    });

    it('get workspace', function () {
        return frisby.get(`${BASE_URL}/workspaces/${workspaceid}`)
            .expect('status', 200)
    });
})
