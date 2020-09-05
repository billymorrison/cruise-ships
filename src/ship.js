class Ship {
    constructor(itinerary) {
        this.itinerary = itinerary
        this.currentPort = itinerary.ports[0];
        this.previousPort = null;
    }

    setSail() {
        const {ports} = this.itinerary;
        const finalPort = ports[ports.length - 1];

        if(this.currentPort === finalPort) {
            throw new Error('This ship is at the final destination');
        }

        this.previousPort = this.currentPort;
        this.currentPort = null;
    }

    dock() {
        const {ports} = this.itinerary;
        this.currentPort = this.currentPort || ports[ports.indexOf(this.previousPort) + 1];
    }
}

module.exports = Ship;