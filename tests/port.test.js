const Port = require('../src/port');

describe('constructor', () => {
    it('creates an object', () => {
        expect(new Port('Hull')).toBeInstanceOf(Object);
    });
    it('has a name initialised', () => {
        expect(new Port('Hull').name).toBe('Hull');
    });
    it('has a ships property', () => {
        expect(new Port('Hull').ships).toBeInstanceOf(Array);
    });
});

describe('add and remove functions', () => {
    const testPort = new Port('Hull')
    it('can add a new ship', () => {
        testPort.addShip({itinerary: 'bla'})

        expect(testPort.ships).toHaveLength(1);
    });
    it('can remove a new ship', () => {
        testPort.removeShip({itinerary: 'bla'})

        expect(testPort.ships).toHaveLength(0);
    });
})