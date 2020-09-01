const Ship = require('../src/ship');

describe('constructor', () => {
    it('creates an object', () => {
        expect(new Ship('Hull')).toBeInstanceOf(Object);
    });
})

describe('initial properties', () => {
    it('accepts a stating port', () => {
        const testShip = new Ship('Hull');
        expect(testShip.startingPort).toBe('Hull');
    });
})