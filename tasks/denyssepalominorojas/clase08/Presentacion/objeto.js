
// ASI SE DECLARA (PORQUE UNA REFERENCIA NUNCA CAMBIA)
const DENYSSE = {
    nombre: 'denysse',
    edad: 24,
    presentacion: () => {
        //console.log(this); // Contexto ya sea de ejecucion o declaracion 
        console.log('Hola soy Denysse y me gustan los videojuegos');
    },
    tengoMascotas: true,
    comidaFavorita: 'Pambazos y enchiladas verdes',
    mascotas: ['Morrison', 'Janis', 'Pancho'],
    familia:{
        padre: 'Javier',
        madre: 'Nancy',
        familia: {
            hermanas: ['Mayra', 'Lucero'],
            hermano: 'Javier'
        }
    }
};

DENYSSE = {}; // CAMBIO DE REFERENCIA
DENYSSE.presentacion();

