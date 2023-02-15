const request = require('supertest');
const {app, server} = require("../../server")();

describe("", () => {
    afterAll(async () => {
        server.close()
    });
    
    test('el endpoint /say/hola/alvaro to alvaro.', async () => {
        await request(app)
            .get("/say/hola/alvaro")
            .expect(200, "Hola alvaro")
    })

    test('el endpoint /say/hola/maria to maria', async () => {
        await request(app)
            .get("/say/hola/maria")
            .expect(200, "Hola maria")
    })
})
