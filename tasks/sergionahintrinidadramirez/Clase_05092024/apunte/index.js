let SERGIO = {
    nombre: 'Sergio Nahin',
    edad: 24,
    tengoCarro: false,
    comidaFavorita: "Hamburguesa",
    familia: {
        padre: "Fernando",
        madre: "Olga"
    },
    presentacion: function() {
        let presentate = `Mi nombre es ${this.nombre}, tengo ${this.edad} años, actualmente, ${this.tengoCarro ? "Si" : "No"} tengo carro, mi comida favorita es la ${this.comidaFavorita}, mis padres son ${this.familia.padre} y ${this.familia.madre}`
        return presentate; 
    }
};
console.log(SERGIO.presentacion());

//Inyecta el texto de presentacion a un parrafo
document.getElementById("parraf").innerText = SERGIO.presentacion();
