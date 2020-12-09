(function exportShip() {
    class Ship {
        constructor(itinerary) {
            this.itinerary = itinerary
            this.currentPort = itinerary.ports[0];
            this.previousPort = null;
            this.currentPort.addShip(this);
        }

        setSail() {
            const {ports} = this.itinerary;
            const finalPort = ports[ports.length - 1];

            if(this.currentPort === finalPort) {
                throw new Error('This ship is at the final destination');
            }

            const nextPortIndex = ports.indexOf(this.currentPort) + 1;
            const nextPortDomElement = document.querySelector(`div[data-port-index="${nextPortIndex}"]`)
            const shipDomElement = document.querySelector('#ship');

            const sailingInterval = setInterval(function(){
                let shipStyleLeftNumber = parseInt(shipDomElement.style.left.split('px'))
                shipDomElement.style.left = `${shipStyleLeftNumber + 1}px`
                if (shipStyleLeftNumber === nextPortDomElement.offsetLeft - 32) {
                    clearInterval(sailingInterval);
                }
            }, 30);

            this.previousPort = this.currentPort;
            this.currentPort = null;
            this.previousPort.removeShip(this);

            this.dock();
        }

        dock() {
            const {ports} = this.itinerary;
            this.currentPort = this.currentPort || ports[ports.indexOf(this.previousPort) + 1];
            this.currentPort.addShip(this);
        }
    }

    if(typeof module !== 'undefined' && module.exports) {
        module.exports = Ship;
    } else {
        window.Ship = Ship;
    }

}())

