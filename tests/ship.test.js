const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');
const hull = new Port('Hull');
const dover = new Port('Dover');
const testItinerary = new Itinerary([hull, dover]);
let testShip = new Ship(testItinerary);

describe('constructor', () => {
    it('creates an object', () => {
        expect(testShip).toBeInstanceOf(Object);
    });
})

describe('initial properties', () => {
    it('accepts an itinerary and sets the first port to currentPort upon initilisation', () => {
        expect(testShip.currentPort.name).toBe('Hull');
        expect(testShip.previousPort).toEqual(null);
    });
})

describe('set sail', () => {
    beforeEach(() => {
        testShip = new Ship(testItinerary);
        testShip.currentPort.ships = [testShip];
    });

    it('sets previous port to the value of current port, makes current port null and removes the ship from the port object', () => {
        testShip.setSail();

        expect(testShip.currentPort).toBeNull;
        expect(testShip.previousPort.name).toBe('Hull');
        expect(testShip.previousPort.ships).toHaveLength(0);
        
    });
    it('throws an error if it tries to set sail from the final port', () => {
        const {ports} = testShip.itinerary;
        testShip.currentPort = ports[ports.length - 1];
        
        expect(() => testShip.setSail()).toThrow('This ship is at the final destination')
    });
})

describe('dock', () => {
    beforeEach(() => testShip = new Ship(testItinerary));

    it('stays at the current port if called while already docked', () => {
        testShip.dock();

        expect(testShip.currentPort.name).toBe('Hull');
    });
    it('can dock at a new port once it has setSail', () => {
        testShip.setSail();
        testShip.dock();

        expect(testShip.currentPort.name).toBe('Dover');
        expect(testShip.currentPort.ships).toContain(testShip);
    }); 
})