const { TestWatcher } = require("jest")

describe("Esto es una suite de pruebas", () => {
    TestWatcher('Caso de prueba 1', () => {
        const result = 1 + 2
        expect(result).toBe(10)
    })
})