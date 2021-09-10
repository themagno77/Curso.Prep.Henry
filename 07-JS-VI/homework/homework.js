// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:

  let mayuscula = nombre.split('');
  let resultado = [];

  mayuscula.forEach( (y,x) => {
    resultado[x] = x === 0 ? y.toUpperCase() : y;
  });

  return resultado.join('');
}
mayuscula('Daniel');

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  function asuma (numero1, numero2) {
    
  }

  cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:

    let sumar = 0;

    numeros.forEach( (y, x) => {
      sumar += y;
    });
    cb(sumar);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:

  array.forEach( (y, x) => {
    cb(y);
  });
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:

  let matriz = array.map(function(elemento) {
    return cb(elemento);  
  });;
  return matriz;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:

  let matriz = [];

  array.forEach( (y, x) => {
    if (y.charAt(0) === 'a') {
      matriz.push(y);
    }
  });

  return matriz;
}
filter(['arbol','casa','armario','silla','mesa','alarma']);
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
