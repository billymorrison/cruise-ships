const Port = require('../src/port');

describe('constructor', () => {
    it('creates an object', () => {
        expect(new Port('Hull')).toBeInstanceOf(Object);
    });
    it('has a name initialised', () => {
        expect(new Port('Hull').name).toBe('Hull');
    });
})