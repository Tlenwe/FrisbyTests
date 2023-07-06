const frisby = require('frisby');
const API_KEY = process.env.API_KEY
const WID = "189f96fa-51e4-4f3e-a0fb-4a5c156f982e"

describe('Postman API: Day 29', () => {
    it('Create Webhook', async ()=> {
        let result = await frisby.post(`https://api.getpostman.com/webhooks?workspace=${WID}`, {
            headers: {
                'x-api-key': API_KEY,
            },
            body: {
                "webhook": {
                    "name": "echo webhook",
                    "collection": "28167079-f8f41077-1585-4fcf-9f3d-0994291ee133"
                }
            }
        })
            .expect('status', 200)
        let url = result.json.webhook.webhookUrl
        let trigger = await frisby.post(url, {body: {"message": "yellow world"}})
            .expect('status', 200)
        console.log(trigger)
    })
})