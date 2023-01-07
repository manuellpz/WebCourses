const http = require('http');

//el modulo http entre otras cosas, nos permite crear servidores
http.createServer((request,response)=>{
    if(request.url === '/') {
        response.write('Welcome to the server');
        return response.end();
    }
    if(request.url === '/about') {
        response.write('Acerca De');
        return response.end();
    }
    response.write(`
        <h1>NOT FOUND</h1>
        <p>The page was not found</p>
        <a href="/">Main Page</a>
    `);
    response.end();
}).listen(3000);

console.log('I am working in port: 3000');