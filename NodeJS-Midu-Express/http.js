const http = require('node:http')

const server = http.createServer((req,res) => {
   if(req.url === '/') {
      res.statusCode = 200; //OK
      //Establecemos la cabecera, donde le indicamos el tipo de contenido de la respuesta y su codificación
      res.setHeader('Content-Type','text/html; charset=utf-8');
      //Cerramos con el contenido de la respuesta
      res.end('<h1>Bienvenidos a mi página de inicio</h1>');
   }
})

server.listen(3000,()=>{
   console.log('Escuchando en el http://localhost:3000');
})

