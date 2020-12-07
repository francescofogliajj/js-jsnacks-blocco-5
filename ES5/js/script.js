// jsnack 3
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

var arrayNomi = [
  "Gianluca",
  "Chiara",
  "Andrea",
  "Adriano",
  "Michele",
  "Fabio"
];

var indicePartenza = 2;

var indiceArrivo = 5;


var risultato = arrayFilter(arrayNomi, indicePartenza, indiceArrivo);
console.log(risultato);

// Funzione---------------------------------------------------------------------
function arrayFilter(array, min, max) {
  var nuovoArray = [];

  // for (var i = 0; i < array.length; i++) {
  //   var elementoCorrente = array[i];
  //
  //   if (i >= min && i <= max) {
  //     nuovoArray.push(elementoCorrente);
  //   }
  //
  // }

  for (var i = min; i <= max; i++) {
    nuovoArray.push(array[i]);
  }

  return nuovoArray;
}
