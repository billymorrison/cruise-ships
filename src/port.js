(function exportPort() {
    class Port {
        constructor(name) {
            this.name = name;
            this.ships = [];
        }

        addShip(shipObject) {
            this.ships.push(shipObject)
        }

        removeShip(shipObject) {
            this.ships.splice(this.ships.indexOf(shipObject), 1);
        }
    }

    if(typeof module !== 'undefined' && module.exports) {
        module.exports = Port;
    } else {
        window.Port = Port;
    }

}());


