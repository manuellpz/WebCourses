const fs = require('node:fs/promises');

console.log("Reading the first file...");
fs.readFile("./archivo.txt", "utf-8")
.then(text => console.log(text))
.catch(error => console.log(error));

console.log("Doing things while we are waiting for...");

console.log("Reading the second file...");
fs.readFile("./archivo2.txt", "utf-8")
.then(text => console.log(text))
.catch(error => console.log(error));
