const user = {
  name: "Albert",
  age: 25,
  country: "Mexico",
  email: "albert@gmail.com",
};

//Module es un objeto global de nodeJS, module tiene una propiedad llamada exports la cual nos permite exportar cualquier tipo de valor, para que puede ser importado y accedido desde cualquier parte del programa.
module.exports = user;