const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');
const hull = new Port('Hull');
const dover = new Port('Dover');
const testItinerary = new Itinerary([hull, dover]);

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
        
        testShip.itinerary.ports[0].ships = [];
    });
    it('throws an error if it tries to set sail from the final port', () => {
        let testShip = new Ship(testItinerary);
        const {ports} = testShip.itinerary;
        testShip.currentPort = ports[ports.length - 1];
        
        expect(() => testShip.setSail()).toThrow('This ship is at the final destination')

        testShip.itinerary.ports[0].ships = [];
    });
    it('is removed from the port', () => {
        let testShip = new Ship(testItinerary);
        testShip.setSail();

        expect(testShip.previousPort.name).toBe('Hull');
        expect(testShip.previousPort.ships).toHaveLength(0);
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
    it('is added to the port', () => {
        let testShip = new Ship(testItinerary);
        testShip.setSail();
        testShip.dock();
        expect(testShip.currentPort.ships).toContain(testShip);
    });
})