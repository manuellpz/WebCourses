const fs = require("node:fs");

//Synchronous Way
// console.log("Reading the first file...");
// const text = fs.readFileSync("./archivo.txt", "utf-8");
// console.log(text);

// console.log('Doing things while we are waiting for...');

// console.log("Reading the second file...");
// const secondText = fs.readFileSync("./archivo2.txt", "utf-8");
// console.log(secondText);

//Asynchronous Way

console.log("Reading the first file...");
fs.readFile("./archivo.txt", "utf-8", (error, text) => {
  console.log("First File: ", text);
});

console.log("Doing things while we are waiting for...");

console.log("Reading the second file...");
fs.readFile("./archivo2.txt", "utf-8", (error, text) => {
  console.log("Second File: ", text);
});
