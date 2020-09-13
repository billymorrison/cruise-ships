(function exportController() {
    class Controller {
        constructor() {
            this.initialiseSea()
        }

        initialiseSea() {
            const backgroundImages = ["./images/water0.png", "./images/water1.png"]
            let backgroundIndex = 0;

            window.setInterval(() => {
                document.querySelector("#viewport").style.backgroundImage = `url(${backgroundImages[backgroundIndex % backgroundImages.length]})`
                backgroundIndex += 1;
            }, 1000)
        }
    }

    if(module !== 'undefined' && module.exports) {
        module.exports = Controller;
    } else {
        window.Controller = Controller;
    }

}())