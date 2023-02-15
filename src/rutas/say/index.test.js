const request = require('supertest');
const {app, server} = require("../../server")();

describe("", () => {
    afterAll(async () => {
        server.close()
    });
    
    test('el endpoint /say/hola/Alvaro saluda a Alvaro', async () => {
        await request(app)
            .get("/say/hola/Alvaro")
            .expect(200, "Hola Alvaro")
    })
  
    test('el endpoint /say/hola/Maria saluda a Maria', async () => {
        await request(app)
            .get("/say/hola/Maria")
            .expect(200, "Hola Maria")
    })

})
