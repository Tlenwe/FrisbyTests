const frisby = require('frisby');
const BASE_URL = "https://randomuser.me/api"

describe('Postman API: Day 09', () => {
    it('get random user $ post echo data ', async () => {
        const response = await frisby.get(BASE_URL)
            .expect('status', 200)
            .expect('header', 'Content-Type', 'application/json; charset=utf-8')

        let data = response.json.results[0]
        let name = `${data['name']['first']} ${data['name']['last']}`
        let email = data['email']
        let id = data['login']['uuid']
        console.log(name, email, id)

        return frisby.post('https://postman-echo.com/post', {
            'name': name,
            'email': email,
            'id': id
        })
            .expect('status', 200)
            .expect('header', 'Content-Type', 'application/json; charset=utf-8')
            .expect('json', 'data', {
                'name': name,
                'email': email,
                'id': id
            })
    });
})
