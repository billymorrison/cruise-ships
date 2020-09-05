const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

beforeAll(() => {
    testItinerary = new Itinerary('Hull', 'Dover')
})

describe('constructor', () => {
    it('creates an object', () => {
        expect(new Ship(testItinerary)).toBeInstanceOf(Object);
    });
})

describe('initial properties', () => {
    it('accepts a stating port and sets it as starting and current port', () => {
        let testShip = new Ship(testItinerary);
        
        expect(testShip.currentPort).toBeInstanceOf(Object);
        expect(testShip.currentPort.name).toBe('Hull');
        expect(testShip.previousPort).toEqual(null);
    });
})

describe('set sail', () => {
    it('sets current port to null', () => {
        let testShip = new Ship(testItinerary);
        testShip.setSail();

        expect(testShip.currentPort).toBeNull;
        expect(testShip.previousPort.name).toBe('Hull');
    });
    it('throws an error if it tries to set sail from the final port', () => {
        let testShip = new Ship(testItinerary);
        const {ports} = testShip.itinerary;
        testShip.currentPort = ports[ports.length - 1];
        
        expect(() => testShip.setSail()).toThrow('This ship is at the final destination')
    });
})

describe('dock', () => {
    

    it('when called while docked stays at the current port', () => {
        let testShip = new Ship(testItinerary);
        testShip.dock();

        expect(testShip.currentPort.name).toBe('Hull');
    });
    it('can dock at a new port once it has setSail', () => {
        let testShip = new Ship(testItinerary);
        testShip.setSail();
        testShip.dock();

        expect(testShip.currentPort.name).toBe('Dover');
    });
})