const Itinerary = require('../src/itinerary');
const hull = jest.fn();
const dover = jest.fn();
const testItinerary = new Itinerary([hull, dover]);

describe('constructor', () => {
    it('creates an object', () => {
        expect(testItinerary).toBeInstanceOf(Object);
    });
})

describe('ports', () => {
    it('has a ports property', () => {
        expect(testItinerary.ports).toBeInstanceOf(Array);
    });

    it('gets ports from arguments', () => {
        expect(testItinerary.ports).toHaveLength(2);
        expect(testItinerary.ports).toContain(hull, dover);
    });
})