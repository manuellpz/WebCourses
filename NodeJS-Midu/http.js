const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log("Request received!");
  res.end("hello there");
});

server.listen(0, () => {
  console.log(`server is listening in http://localhost:${server.address().port}`);
});

//Un error muy común que suele suceder es que el puerto esté ocupado. Para ello usaremos el puerto 0, esté le dice al server se conecte al primer puerto que se encuentre disponible. Esto solo se recomienda usar en mode desarrollo, en producción se utilizará algún puerto destinado a ello.
