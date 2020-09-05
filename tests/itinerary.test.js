const Itinerary = require('../src/itinerary');

describe('constructor', () => {
    it('creates an object', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });
})

describe('ports', () => {
    it('has a ports property', () => {
        expect(new Itinerary().ports).toBeInstanceOf(Array);
    });
    it('gets ports from arguments', () => {
        const testItinerary = new Itinerary('Hull', 'Dover');
        expect(testItinerary.ports).toHaveLength(2);
        expect(testItinerary.ports[0].name).toEqual('Hull');
    });
})