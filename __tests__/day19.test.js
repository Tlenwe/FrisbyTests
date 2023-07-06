const frisby = require('frisby');
const BASE_URL = "https://joyce-spotify-graphql.herokuapp.com"

describe('Postman API: Day 19', () => {
    it('spotify', function () {
        let gql = {
            "query":"query getByArtist($name: String!) {\n" +
                "    queryArtists (byName: $name) {\n" +
                "        name\n" +
                "        image\n" +
                "        albums {\n" +
                "            name\n" +
                "        }\n" +
                "    }\n" +
                "}",
            "operationName": "getByArtist",
            "variables": {"name":"Mother Mother"}
        }
        return frisby.post(`${BASE_URL}/graphql`, {headers: {"Content-Type": "application/json"},
            body: gql})
            .expect('status', 200)
            .then((result) => {
                let jsonData = result.json.data.queryArtists[0]
                expect(jsonData.name).toBe('Mother Mother')
                expect(jsonData.albums[1].name).toBe('Inside')
            })
    });
})