const Controller = require("../src/controller")
const testControl = new Controller();

describe("controller", () => {
    it("creates an object", () => {
        expect(testControl).toBeInstanceOf(Object);
    })
})