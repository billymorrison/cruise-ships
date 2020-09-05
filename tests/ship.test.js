const Ship = require('../src/ship');
const Port = require('../src/port');

describe('constructor', () => {
    it('creates an object', () => {
        expect(new Ship('Hull')).toBeInstanceOf(Object);
    });
})

describe('initial properties', () => {
    it('accepts a stating port and sets it as starting and current port', () => {
        const start = new Port('Hull')
        let testShip = new Ship(start);
        
        expect(testShip.startingPort).toBeInstanceOf(Object);
        expect(testShip.startingPort.name).toBe('Hull')
        expect(testShip.currentPort).toBeInstanceOf(Object);
        expect(testShip.currentPort.name).toBe('Hull')
    });
})

describe('set sail', () => {
    it('sets current port to null', () => {
        let testShip = new Ship('Hull');
        testShip.setSail();

        expect(testShip.currentPort).toBeNull;
    });
})