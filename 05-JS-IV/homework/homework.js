// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:

  let gato = {
    nombre: nombre, 
    edad: edad,
    meow: function () {
      return "Meow!"; 
    }
  }; 

  return gato;
}
crearGato('Luna', 4);

function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:

  let propiedad = objeto;
  propiedad[property] = null;

  return propiedad;
}
agregarPropiedad({ }, 'valor');

function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:

  let invocar = objeto;

  invocar[metodo]();
}
invocarMetodo({ metodo: function() {} }, 'metodo');

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:

  let numero = objetoMisterioso;

  return numero.numeroMisterioso * 5; 
}
multiplicarNumeroDesconocidoPorCinco({ numeroMisterioso: 5 });

function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:

  let animal = objeto;
  delete animal[unaPropiedad];

  return  animal;
}
eliminarPropiedad({ perro: "Guau", gato: "Miau" }, 'perro');

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:

  let usuario = {
    nombre: nombre, 
    email: email,
    password: password
  };

  return usuario;
}
nuevoUsuario('Daniel', 'themagno777@hotmail.com', '1234');


function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:

  let persona = usuario;
  let resultado = persona.email ? true : false;

  return resultado;
}
tieneEmail({ email: 'a' });


function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:

  let perro = objeto;
  let resultado = false;

  for (const clave in perro) {
    if (clave === propiedad) { resultado = true; } 
  }

  return resultado;
}
tienePropiedad({ raza: 'Akita', color: 'Negro y blanco' }, 'raza');

function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:

  let persona = usuario;

  let resultado = persona.password === password ? true : false ;

  return resultado;
}
verificarPassword({ password: '1234' }, '7777');

function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:

  let persona = usuario;

  persona.password = nuevaPassword;

  return persona;
}
actualizarPassword({ password: '1234' }, '7777');

function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código:

  let persona = usuario;

  persona.amigos.push(nuevoAmigo);

  return persona;
}
agregarAmigo({ amigos: ['Nico','Alejo'] }, 'Majo');

function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:

  let persona = usuarios;

  persona.forEach( (y, x) => {
    y.esPremium = true
  });

  return persona;
}
pasarUsuarioAPremium([ { esPremium: false }, { esPremium: false } ]);

function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:

  let persona = usuario;
  let post = persona.posts;
  let suma = 0;

  post.forEach( (y, x) => {
    suma += y.likes; 
  });

  return suma;
}
sumarLikesDeUsuario({ posts: [ { likes: 7 }, { likes: 27 }, { likes: 12 } ] });

function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:

  let mercancia = producto;
  mercancia.calcularPrecioDescuento = function () { 
    let porcentaje = producto.precio * producto.porcentajeDeDescuento;
    let valor = producto.precio - porcentaje;
    return valor;
  }; 

  return mercancia;
}
agregarMetodoCalculoDescuento({ precio: 10000, porcentajeDeDescuento: 0.2 });

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
};
