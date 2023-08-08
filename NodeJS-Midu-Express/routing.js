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
      }
  }
};

const server = http.createServer(processRequest);

server.listen(1234, () => {
  console.log("Escuchando en el puerto http://localhost:1234");
});
