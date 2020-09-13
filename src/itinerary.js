(function exportItinerary() {
    class Itinerary {
        constructor(array) {
            this.ports = array;
        }
    }

    if(module !== 'undefined' && module.exports) {
        module.exports = Itinerary;
    } else {
        window.Itinerary = Itinerary;
    }

}());
