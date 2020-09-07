const Port = require('../src/port');
const testPort = new Port('Hull');

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
        testPort.addShip({itinerary: 'bla'})

        expect(testPort.ships).toHaveLength(1);
    });
    it('can remove a new ship', () => {
        testPort.removeShip({itinerary: 'bla'})

        expect(testPort.ships).toHaveLength(0);
    });
})