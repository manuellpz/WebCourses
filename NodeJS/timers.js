let puntos = "";
console.log("Sending message");
let intervalo = setInterval(() => {
  puntos += ".";
  console.log(`Wait for a moment ${puntos}`);
}, 1000);

setTimeout(() => {
  clearInterval(intervalo);
  console.log("The message was sent!");
}, 6000);