const request = require('supertest');
const {app} = require("../../server")();

describe("", () => {
    let server
    
    beforeAll(async () => {
        server = app.listen(3000)
    });

    afterAll(async () => {
        server.close()
    });
    
    test('el endpoint /say/hola hace .....', async () => {
        await request(app)
            .get("/say/hola")
            .expect(200)
    })
})
