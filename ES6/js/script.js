// jsnack 3
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

const arrayNomi = [
  "Gianluca",
  "Chiara",
  "Andrea",
  "Adriano",
  "Michele",
  "Fabio"
];

let indicePartenza = 2;

let indiceArrivo = 5;


const arrayFilter = (array, min, max) => {
  let nuovoArray = [];

  for (let i = min; i <= max; i++) {
    nuovoArray.push(array[i]);
  }

  return nuovoArray;
}

const risultato = arrayFilter(arrayNomi, indicePartenza, indiceArrivo);
console.log(risultato);
