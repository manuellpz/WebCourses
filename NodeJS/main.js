//La funcion require() nos permite importar un modulo colocando su ruta
// const usuario = require('./modules/myModule');

const math = require("./Math/index");

console.log(math.add(5, 10));
console.log(math.substract(5, 10));
console.log(math.multiply(5, 10));
console.log(math.divide(5, 10));