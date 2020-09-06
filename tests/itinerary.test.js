const Itinerary = require('../src/itinerary');
const Port = require('../src/port');

describe('constructor', () => {
    const hull = new Port('Hull');
    const dover = new Port('Dover');
    const testItinerary = new Itinerary([hull, dover]);

    it('creates an object', () => {
        expect(testItinerary).toBeInstanceOf(Object);
    });
})

describe('ports', () => {
    const hull = new Port('Hull');
    const dover = new Port('Dover');
    const testItinerary = new Itinerary([hull, dover]);

    it('has a ports property', () => {
        expect(testItinerary.ports).toBeInstanceOf(Array);
    });

    it('gets ports from arguments', () => {
        expect(testItinerary.ports).toHaveLength(2);
        expect(testItinerary.ports[0].name).toEqual('Hull');
    });
})