const net = require('node:net');

const desiredPort = process.env.PORT ?? 3000;

function findAvailablePort(desiredPort) {
   return new Promise((resolve,reject) => {
      const server = net.createServer();

      server.listen(desiredPort, () => {
         const {port} = server.address();
         server.close(()=> {
            resolve(port)
         })
      })
      server.on('error',err => {
         if(err.code == 'EACCES') {
            findAvailablePort(0).then(port => resolve(port))
         }else {
            reject(err)
         }
      })
   })
}

findAvailablePort(desiredPort)
.then(port => console.log('Escuchando en el puerto http://localhost:'+port));