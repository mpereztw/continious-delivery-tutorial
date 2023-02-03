const say = require("./say");

test('devuelve hola', () => {
    expect(say.decirHola("Alvaro")).toBe("Hola Alvaro");
})