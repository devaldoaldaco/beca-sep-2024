let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

function imprimirMatriz(){
    matriz.forEach(fila => {
        fila.forEach(elemento => {
          console.log(elemento);
        });
      });
}

imprimirMatriz();