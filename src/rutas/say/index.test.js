const request = require('supertest');
const {app, server} = require("../../server")();

describe("", () => {
    afterAll(async () => {
        server.close()
    });
    
    test('el endpoint /say/hola hace .....', async () => {
        await request(app)
            .get("/say/hola")
            .expect(200)
    })
})
