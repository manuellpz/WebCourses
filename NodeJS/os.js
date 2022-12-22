//Este modulo nos permite extraer información del sistema operativo
const os = require("os");

console.log(os.userInfo()); //Información del usuario
console.log(os.uptime()); //Tiempo desde que se encendió la maquina en segundos
console.log(os.platform()); //Nos brinda el sistema operativo donde opera.
console.log(os.totalmem()); //Retorna la memoria total
console.log(os.freemem()); //Retorna cantidad de memoria libre
console.log(os.version()); //Retorna la version del OS

console.table({
  os: os.platform(),
  version: os.version(),
  username: os.userInfo().username,
});