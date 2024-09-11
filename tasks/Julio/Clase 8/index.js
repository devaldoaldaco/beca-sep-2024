
// Ejercicio; Clase de objetos 

const persona = {
    name: "Julio Santillán",
    edad: 28,
    sexo: 'M',
    mascotas: ['Betty','Bella','Vainilla','Raquel','Oreo','Nutria','Dominos','Pochowine'],
    familia: {
        madre: "Hilaria",
        padre: "Chayanne",
        hermana: "Aura",
        novia: "Anne",
    },
    saludo: function(){
        return `Hola! Mi nombre es ${this.name}, tengo ${this.edad} años, tengo ${this.mascotas.length} gatos y mi madre se llama ${this.familia.madre}`;
    }
}

let text= document.querySelector('h1');
text.innerHTML= persona.saludo();

document.querySelector('body').style.backgroundColor="#d8bfd8"
document.querySelector('body').style.color="#2f4f4f";

