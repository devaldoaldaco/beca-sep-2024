
const promesa1 = new Promise(resolve => setTimeout(() => resolve('Promesa 1 resuelta'), 2000));
const promesa2 = new Promise(resolve => setTimeout(() => resolve('Promesa 2 resuelta'), 1000));
const promesa3 = new Promise(resolve => setTimeout(() => resolve('Promesa 3 resuelta'), 3000));


Promise.all([promesa1, promesa2, promesa3])
  .then(resultados => {
    const resultadoAllElement = document.getElementById('resultadoAll');
    resultadoAllElement.textContent = 'Todas las promesas se resolvieron: ' + resultados.join(', ');
  })
  .catch(error => {
    console.error('Alguna promesa falló en Promise.all:', error);
  });


Promise.race([promesa1, promesa2, promesa3])
  .then(resultado => {
    const resultadoRaceElement = document.getElementById('resultadoRace');
    resultadoRaceElement.textContent = 'La primera promesa en resolverse fue: ' + resultado;
  })
  .catch(error => {
    console.error('La primera promesa falló en Promise.race:', error);
  });