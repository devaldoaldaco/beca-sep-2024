class EventManager {

}
const eventManager = new EventManager ();
const button = document.getElementoById('myButton');
button.addEventListener('click', () => {
    eventManager.emit('buttonClicked', 'Se hizo clic en el boton!');

});

eventManager.on('buttonClicked', (message) => {
    console.log(message);

});
