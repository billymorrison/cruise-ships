const Ship = require('../src/ship');

const port = {
    removeShip: jest.fn(),
    addShip: jest.fn(),
  };
const hull = {
    ...port,
    name: 'Hull',
    ships: []
};
const dover = {
    ...port,
    name: 'Dover',
    ships: []
};
const testItinerary = { ports: [hull, dover] };

let testShip = new Ship(testItinerary);

describe('constructor', () => {
    it('creates an object', () => {
        expect(testShip).toBeInstanceOf(Object);
    });
})

describe('initial properties', () => {
    it('accepts an itinerary and sets the first port to currentPort upon initilisation', () => {
        expect(testShip.currentPort.addShip).toHaveBeenCalledWith(testShip);
        expect(testShip.previousPort).toEqual(null);
    });
})

describe('set sail', () => {
    beforeEach(() => {
        testShip = new Ship(testItinerary);
    });

    it('sets previous port to the value of current port, makes current port null and removes the ship from the port object', () => {
        testShip.setSail();

        expect(testShip.currentPort).toBeNull;
        expect(testShip.previousPort.removeShip).toHaveBeenCalledWith(testShip);
        
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
        expect(testShip.currentPort.addShip).toHaveBeenCalledWith(testShip);
    });
    it('can dock at a new port once it has setSail', () => {
        testShip.setSail();
        testShip.dock();

        expect(testShip.currentPort.name).toBe('Dover');
        expect(testShip.currentPort.removeShip).toHaveBeenCalledWith(testShip);
        expect(testShip.currentPort.addShip).toHaveBeenCalledWith(testShip);
    }); 
})