const button = document.querySelector("button");
const eventManager = new EventManager(button);

class EventManager {
    constructor(element) {
      element.addEventListener("click", this.sendMessage());
    }
    sendMessage() {
      alert("Has hecho click en el botón");
    }
}