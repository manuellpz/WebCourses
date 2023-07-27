/*
Ecmascript nos permite usar await en el cuerpo del archivo sin la necesidad de una función 
asincrona
*/

import { readFile } from "node:fs/promises";


console.log("Reading the first file...");
const text = await readFile("./archivo.txt", "utf-8")
console.log('First Text: ',text);

console.log("Doing things while we are waiting for...");

console.log("Reading the second file...");
const secondText = await readFile("./archivo2.txt", "utf-8")
console.log('Second Text: ',secondText);