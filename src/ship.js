class Ship {
    constructor(startPort) {
        this.currentPort = startPort;
    }

    setSail() {
        this.currentPort = null;
    }

    dock(port) {
        this.currentPort = port;
    }
}

module.exports = Ship;