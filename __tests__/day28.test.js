const frisby = require('frisby');

const URL = "https://www.twitch.tv/"
describe('Postman API: Day 28', () => {
    jest.setTimeout(100000)
    it('response time', function () {
        return frisby.get(`${URL}`)
            .expect('status', 200)
            .then((result)=>{
                expect(result['_responseTimeMs']).toBeLessThan(1000)})
    });
    // skipped because api doesn't work (network timeout)
    it.skip ('lighthouse', function () {
        return frisby.get(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${URL}`)
            .expect('status', 200)
            .then((lighthouse)=> {
                let score = lighthouse.json.loadingExperience.metrics.CUMULATIVE_LAYOUT_SHIFT_SCORE['percentile']
                expect(score).toBeGreaterThanOrEqual(9)
            })
    });
})