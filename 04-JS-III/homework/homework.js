// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:

  return array[0];
}
devolverPrimerElemento(['perro','gato','raton','leon']);

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:

  return array[array.length - 1]; 
}
devolverUltimoElemento(['amarillo','verde','azul','negro']);

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:

  return array.length;
}
obtenerLargoDelArray(['carro','moto','avion','barco','avion']); 

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let matriz = [];

  array.forEach( (y, x) => { matriz.push(y + 1); });

  return matriz;
}
incrementarPorUno([1,20,77,42,51]);

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);

  return array;
}
agregarItemAlFinalDelArray(['Nico','Alejo','Majo'], 'Daniel');

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}
agregarItemAlComienzoDelArray(['Sara','Paola','Laura'], 'Jorge') ;

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  let frase = '';

  palabras.forEach( (y, x) => { frase += ` ${y}`; });

  return frase.trim();
}
dePalabrasAFrase(['Majo','es','muy','bonita']);

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  let resultado = false;

  array.forEach( (y, x) => {
    if (y === elemento) { resultado = true; }
  });

  return resultado;
}
arrayContiene(['Manzana','Pera','Mandarina','Coco'], 'Manzana');

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  let valor = 0;

  numeros.forEach( (y, x) => { valor += y; });

  return valor;
}
agregarNumeros([5,77,32,65]);

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  let valor = 0;
  let promedio = 0;

  resultadosTest.forEach( (y, x) => { valor += y; });

  promedio = valor / resultadosTest.length;

  return promedio;
}
promedioResultadosTest([1,5,5,3,4]);

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  let mayor = 0;

  numeros.forEach( (y, x) => { if (y > mayor) { mayor = y; } });

  return mayor;
}
numeroMasGrande([2,6,7,97,17,55]);

function multiplicarArgumentos(a, b, c) {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  
  let resultado = '';
  let valor = 1;

  if (arguments.length < 1) { resultado = 0; }
  else if (arguments.length === 1) { resultado = arguments[0]; }
  else {
    for (let x = 0; x < arguments.length; x++) {
      valor *= arguments[x];
    }

    resultado = valor;
  }

  return resultado;
}
multiplicarArgumentos([2,6,7,8]);

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  let resultado = 0;

  arreglo.forEach( (y, x) => {
    if (y > 18) { resultado += 1; }
  });

  return resultado;
}
cuentoElementos([15,7,25,36,24,8,12]);

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  
  let dia = ['','Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];

  let resultado = numeroDeDia === 1 || numeroDeDia === 7 ? "Es fin de semana" : "Es dia Laboral" ;

  return resultado;
} 
diaDeLaSemana(7);

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  
  let string = String(n);
  let resultado = string[0] === '9' ? true : false;

  return resultado;
}
empiezaConNueve(977);

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  
  let base = arreglo[0];
  let resultado = true;

  arreglo.forEach( (y, x) => { if (y !== base) { resultado = false; } });

  return resultado;
} 
todosIguales([7,7,8,7,7]);


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  let meses = [];

  array.forEach( (y, x) => { 
    if (y === 'Enero' || y === 'Marzo' || y === 'Noviembre') { meses.push(y); }
  });

  let resultado = meses.length === 3 ? meses : "No se encontraron los meses pedidos" ;

  return resultado;
}
mesesDelAño(['Enero','Septiembre','Diciembre','Noviembre','Marzo']);

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  let cien = [];

  array.forEach( (y, x) => {
    if (y > 100) { cien.push(y); }
  });

  return cien;
}
mayorACien([2,123,56,7,167,100,25,5,101]);

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  let valor = numero;
  let matriz = [];

  for (let x = 0; x < 10; x++) {
    if (valor === 10) {
      resultado = "Se interrumpió la ejecución";
      break;
    } else{
      valor += 2;
      matriz.push(valor);
      resultado = matriz;
    }
  }

  return resultado;
}
breakStatement(1);

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  let valor = numero;
  let matriz = [];

  for (let x = 0; x < 10; x++) {
    if (x !== 5) { 
      valor += 2;
      matriz.push(valor);
    } else { continue; }
  }

  return matriz;
}
continueStatement(3);

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
