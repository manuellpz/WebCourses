const http = require('http');

//el modulo http entre otras cosas, nos permite crear servidores
http.createServer((request,response)=>{
    response.write('I am a web server');
    response.end();
}).listen(3000);

console.log('I am working in port: 3000');