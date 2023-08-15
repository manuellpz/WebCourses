const http = require("node:http");

const processRequest = (req, res) => {
  const { method, url } = req;
  const dittoJSON = require("./pokemon/ditto.json");

  switch (method) {
    case "GET":
      switch (url) {
        case "/pokemon/ditto":
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          return res.end(JSON.stringify(dittoJSON));
        default:
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          res.statusCode = 404;
          return res.end("<h1>Error 404 Not Found</h1>");
      }
    case "POST":
      switch (url) {
        case "/pokemon":
          let body = "";
          //En el request por cada trozo (chunk) de información lo almacenaremos en el body
          req.on('data', chunk => {
            body += chunk.toString();
          })
          req.on('end', () => {
            const data = JSON.parse(body);
            //Podemos escribir tanto el statuscode como la cabecera con el método writeHead
            res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' })
            data.timestamp = Date.now();
            return res.end(JSON.stringify(data));
          })
          break;

        default:
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
          res.statusCode = 404;
          return res.end('404 Not Found');
      }
  }
};

const server = http.createServer(processRequest);

server.listen(1234, () => {
  console.log("Escuchando en el puerto http://localhost:1234");
});
