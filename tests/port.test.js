const Port = require('../src/port');
const testPort = new Port('Hull');
const testShip = jest.fn();

describe('constructor', () => {
    it('creates an object', () => {
        expect(testPort).toBeInstanceOf(Object);
    });
    it('has a name initialised', () => {
        expect(testPort.name).toBe('Hull');
    });
    it('has a ships property', () => {
        expect(testPort.ships).toBeInstanceOf(Array);
    });
});

describe('add and remove functions', () => {
    it('can add a new ship', () => {
        testPort.addShip(testShip)

        expect(testPort.ships).toContain(testShip);
    });
    it('can remove a new ship', () => {
        testPort.removeShip(testShip)

        expect(testPort.ships).not.toContain(testShip);
    });
})