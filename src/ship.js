class Ship {
    constructor(startPort) {
        this.startingPort = startPort || 'Dover',
        this.currentPort = this.startingPort
    }

    setSail() {
        this.currentPort = null;
    }
}

module.exports = Ship;