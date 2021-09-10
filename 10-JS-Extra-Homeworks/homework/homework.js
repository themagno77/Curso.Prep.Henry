// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let matriz = []
  
  for (let clave in objeto){
    let elemento = [clave, objeto[clave]];
    matriz.push(elemento);
  } 

  return matriz;
}
deObjetoAmatriz({ D: 1, B: 2, C: 3});

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  let matriz = string.split('');
  let objeto = {};

  matriz.forEach( (y, x) => {
    let estado = false;
    let cantidad = 0;

    for (let clave in objeto){
      if (clave === y) { estado = true; cantidad = objeto[clave] + 1; } 
    } 

    if (!estado) { cantidad = 1; }
    objeto[y] = cantidad;  
  });

  return objeto;
}
numberOfCharacters('adsjfdsfsfjsdjfhacabcsbajda');

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  let matriz = s.split('');
  let mayuscula = [];
  let minuscula = [];

  matriz.forEach( (y, x) => {
    if (y === y.toUpperCase()) { mayuscula.push(y); } else { minuscula.push(y); } 
  });

  let texto = mayuscula.concat(minuscula);
  return texto.join('');
}
capToFront('soyHENRY');

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let matriz = str.split(' ');
  let frase = [];

  matriz.forEach( (y, x) => {
    let palabra = y.split('');
    let inverso = palabra.reverse();
    let unir = inverso.join('');
    frase.push(unir);
  });
 
  return frase.join(' ');
} 
asAmirror("The Henry Challenge is close!");

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  let texto = numero.toString();
  let matriz = texto.split('');
  let invertir = matriz.reverse();
  let valor = invertir.join('');

  let resultado = numero === parseFloat(valor) ? "Es capicua" : "No es capicua" ;

  return resultado;
}
capicua(78787);

function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  let matriz = cadena.split('');
  let resultado = [];

  matriz.forEach( (y, x) => {
    if (y === 'a' || y === 'b' || y === 'c') { }
    else { 
      resultado.push(y);
    } 
   });

   return resultado.join('');
}
deleteAbc('Danielviajaenbarco');

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  
  let matriz = [];
  let cantidad = 0;
  arr.forEach( (y, x) => {
    if (y.length > cantidad) { cantidad = y.length; } 
  });

  for (let x = 1; x <= cantidad; x++) {
      arr.forEach( (yy, xx) => {
          if (yy.length === x) { matriz.push(yy); } 
      });
  }

  return matriz;
}
sortArray(["You", "are", "beautiful", "looking"]);

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  let matriz = [];
  arreglo1.forEach( (y, x) => {
    arreglo2.forEach( (yy, xx) => {
      if (y === yy) { matriz.push(y); }
    });   
  });

  return matriz;
}
buscoInterseccion([2,4,3,6,7], [7,8,1,3,6]);

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

