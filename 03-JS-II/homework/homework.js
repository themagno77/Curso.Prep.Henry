// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:

  let mayor = 0;

  if (x > y) { mayor = x; }
  else if (x < y) { mayor = y; }
  else { mayor = x; }

  return mayor;
}
obtenerMayor(7, 1);

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"

  let mayor = edad >= 18 ? "Allowed" : "Not allowed";
  return mayor;
}
mayoriaDeEdad(18);

function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.

  let conexion = '';

  switch (parseFloat(status)) {
    case 1: conexion = "Online"; break;
    case 2: conexion = "Away"; break;
    default: conexion = "Offline"
  }

  return conexion;
}
conection(1);

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:

  let saludo = '';

  switch (idioma) {
    case 'aleman': saludo = "Guten Tag!"; break;
    case 'mandarin': saludo = "Ni Hao!"; break;
    case 'ingles': saludo = "Hello!"; break;
    default: saludo = "Hola!"
  }

  return saludo;
}
saludo('aleman');

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.

  let resultado = '';

  switch (color) {
    case "blue": resultado = "This is blue"; break;
    case "red": resultado = "This is red"; break;
    case "green": resultado = "This is green"; break;
    case "orange": resultado = "This is orange"; break;
    default: resultado = "Color not found";
  }

  return resultado;
}
colors('green');

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:

  let resultado = numero === 10 || numero === 5 ? true : false ;

  return resultado;
}
esDiezOCinco(10);

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:

  let rango = numero < 50 && numero > 20 ? true : false ;

  return rango; 
}
estaEnRango(30);

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:

  let entero = false;

  entero = numero  - Math.floor(numero) === 0 ? true : false ;

  return entero;
}
esEntero(7.7);

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero

  let resultado = '';

  if (numero % 3 === 0 && numero % 5 === 0) { resultado = "fizzbuzz"; }
  else if (numero % 3 === 0) { resultado = "fizz"; }
  else if (numero % 5 === 0) { resultado = "buzz"; }
  else { resultado = numero; }

  return resultado;
}
fizzBuzz(15);

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 

  let resultado = '';

  if (num1 > 0 && num2 > 0 && num3 > 0) { 
    if (num1 > num2 && num1 > num3) { resultado = "Número 1 es mayor y positivo"; }
    else { 
      if (num3 > num1 && num3 > num2) { resultado = num3 + 1; }
      else { resultado = false; }
    }
  } else {
    resultado = num1 === 0 || num2 === 0 || num3 === 0 ? "Error" : "Hay negativos" ;
  }

  return resultado;
}
operadoresLogicos(10, 3, 7);

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos

  let primo = true;

  if (numero > 1) {
    for (let x = 2; x < numero; x++) {
      if (numero % x === 0) { primo = false; }
    }
  } else { primo = false; }

  return primo;
}
esPrimo(7);

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí

  let verdadero = valor ? "Soy verdadero" : "Soy falso";

  return verdadero;
}
esVerdadero(true);

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  
  let seis = [];

  for (let x = 0; x < 11; x++) { seis.push(x * 6); }

  return seis;
}
tablaDelSeis();

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  
  let digito = numero > 99 && numero < 1000 ? true : false ;

  return digito;
}
tieneTresDigitos(777);

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  let x = 0;
  let resultado = numero;

  do {
    x = x + 1;
    resultado = resultado + 5;
  } while (x < 8);

  return resultado;
}
doWhile(5);

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
