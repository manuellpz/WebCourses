const http = require("node:http");

const server = http.createServer((req, res) => {
  //Establecemos la cabecera, donde le indicamos el tipo de contenido de la respuesta y su codificación
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  if (req.url === "/") {
    res.statusCode = 200; //OK
    //Cerramos con el contenido de la respuesta
    res.end("<h1>Bienvenidos a mi página de inicio</h1>");
  } else if (req.url === "/contacto") {
    res.statusCode = 200;
    res.end("<h1>CONTACTO</h1>");
  } else {
    res.statusCode = 404;
    res.end("<h1>404 NOT FOUND</h1>");
  }
});

server.listen(3000, () => {
  console.log("Escuchando en el http://localhost:3000");
});
