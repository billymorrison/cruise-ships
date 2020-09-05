const Ship = require('../src/ship');
const Port = require('../src/port');

describe('constructor', () => {
    it('creates an object', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
})

describe('initial properties', () => {
    it('accepts a stating port and sets it as starting and current port', () => {
        const start = new Port('Hull')
        let testShip = new Ship(start);
        
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

describe('dock', () => {
    it('can dock at a new port', () => {
        let testShip = new Ship('Hull');
        let newPort = new Port('Dover');
        testShip.dock(newPort);

        expect(testShip.currentPort.name).toBe('Dover');
    });
})