const request = require('supertest');
const app = require("../../../index");

test('el endpoint /say/hola hace .....', (done) => {
    request(app)
        .get("/say/hola")
        .expect(200, done)
})