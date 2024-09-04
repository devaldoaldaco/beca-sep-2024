const botonAmarillo = document.querySelector("#btn-amarillo");
const botonVerde = document.querySelector("#btn-verde");
const cuadro = document.querySelector("div");

botonAmarillo.addEventListener("click", () => {
  cuadro.style.backgroundColor = 'yellow';
});
botonVerde.addEventListener("click", () => {
  cuadro.style.backgroundColor = 'green';
})
