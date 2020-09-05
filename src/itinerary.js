const Port = require("./port");

class Itinerary {
    constructor(port1, port2) {
        this.ports = [new Port(port1), new Port(port2)];
    }
}

module.exports = Itinerary;