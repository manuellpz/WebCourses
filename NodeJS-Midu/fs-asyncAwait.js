/*
En CommonJS para usar await tenemos que envolverlo dentro de una función async
*/

const fs = require("node:fs/promises");

(async () => {
  console.log("Reading the first file...");
  const text = await fs.readFile("./archivo.txt", "utf-8");
  console.log("First Text: ", text);

  console.log("Doing things while we are waiting for...");

  console.log("Reading the second file...");
  const secondText = await fs.readFile("./archivo2.txt", "utf-8");
  console.log("Second Text: ", secondText);
})();
