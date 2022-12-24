//Abreviación de File System, nos permite trabajar con archivos
const fs = require("fs");

//El metodo readFileSync nos permite leer un archivo, recibe por lo menos dos parametros esenciales, la ruta y la codificación, la codificación es porque sin ella nos devuelve solo el buffer del archivo, es decir el 'archivo crudo'
const firstFile = fs.readFileSync("./data/first.txt", "utf-8");
const secondFile = fs.readFileSync("./data/second.txt", "utf-8");

//El metodo writeFileSync nos permite crear un nuevo archivo, los parametros serían: la ruta junto con el nombre del archivo y el contenido del mismo. Opcionalmente tenemos un tercer parametro que es: un objeto con una propiedad llamada flag donde su valor puede ser el caracter 'a' (append) que le dice a node que en el archivo añada nuevo texto al ya existente
fs.writeFileSync('./data/third.txt','\nNew text',{
    flag:'a'
});

console.log(firstFile);
console.log(secondFile);
