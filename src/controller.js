(function exportController() {
    class Controller {
        constructor(ship) {
            this.ship = ship;
            this.initialiseSea()
            const setSailButton = document.querySelector('#sailbutton');
            setSailButton.addEventListener('click', () => this.ship.setSail());
        }

        initialiseSea() {
            const backgroundImages = ["./images/water0.png", "./images/water1.png"]
            let backgroundIndex = 0;

            window.setInterval(() => {
                document.querySelector("#viewport").style.backgroundImage = `url(${backgroundImages[backgroundIndex % backgroundImages.length]})`
                backgroundIndex += 1;
            }, 1000)
        }

        renderPorts(ports) {
            const portsElement = document.getElementById('ports');
            portsElement.style.width = "0px"

            const increasePortsWidth = () => {
                const {width} = portsElement.style;
                portsElement.style.width = String(parseInt(width) + 256) + "px";
            }

            ports.forEach(element => {
                let portDiv = document.createElement('div');
                portDiv.setAttribute('class', 'port');
                portDiv.dataset.portName = element.name;
                portDiv.dataset.portIndex = `${ports.indexOf(element)}`;
                portsElement.appendChild(portDiv);

                increasePortsWidth(portsElement.style.width);
            });
        }

        renderShip() {
            const currentPortIndex = this.ship.itinerary.ports.indexOf(this.ship.currentPort);
            const portDomElement = document.querySelector(`div[data-port-index="${currentPortIndex}"]`);
            const shipDomElement = document.querySelector('#ship');

            shipDomElement.style.top = `${portDomElement.offsetTop + 15}px`;
            shipDomElement.style.left = `${portDomElement.offsetLeft - 32}px`;
        }

        //setSail() {
            // const nextPortIndex = this.ship.itinerary.ports.indexOf(this.ship.currentPort) + 1;
            // const nextPortDomElement = document.querySelector(`div[data-port-index="${nextPortIndex}"]`)
            // const shipDomElement = document.querySelector('#ship');

            // shipDomElement.style.left = `${nextPortDomElement.offsetLeft - 32}px`;
            // console.log(this);
        }
        //add interval and clear interval
    //}

    if(typeof module !== 'undefined' && module.exports) {
        module.exports = Controller;
    } else {
        window.Controller = Controller;
    }

}())