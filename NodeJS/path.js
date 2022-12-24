//El modulo path nos provee de métodos muy importantes relacionados con las rutas
const path = require("path");

//El metodo join nos permite concatenar rutas y nos devuelve la ruta, en un formato correcto, acorde a nuestro sistema operativo.
const filePath = path.join('/public','styles','css','estilos.css');

//El metodo basename nos permite extraer el archivo base de una ruta dada
const fileBase = path.basename(filePath);

//El metodo dirname nos permite extraer los directorios padre de un archivo base
const fileDirname = path.dirname(filePath);

//El metodo parse nos permite extraer informacion del archivo base de una ruta dada
const fileParse = path.parse(filePath);

console.log(filePath);
console.log(fileBase);
console.log(fileDirname);
console.log(fileParse);