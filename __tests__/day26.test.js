const frisby = require('frisby');
const cheerio = require('cheerio');
const input = "postman"

describe('Postman API: Day 26', () => {
    it('', async () => {

        let bingSearchResult = await frisby.get(`https://www.bing.com/search?q=${input}`).expect('status', 200)
        let linksArray = []
        let result = cheerio.load(bingSearchResult.body)
        result('h2 a').each((i, link) => {
            linksArray.push(result(link).attr('href'))
        })
        console.log(linksArray)
        expect(linksArray).toBeInstanceOf(Array)
    });
})