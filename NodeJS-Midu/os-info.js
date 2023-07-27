const os = require('node:os');

console.log('Informacion del sistema operativo');
console.log('---------------------------------');
console.log(`Name: ${os.platform()}`);
console.log(`Version: ${os.release()}`);
console.log('Architecture: ',os.arch());
console.log(`CPUs: ${os.cpus()}`);
console.log('Free Memory: ',os.freemem() / 1024 / 1024);
console.log('Total Memory: ',os.totalmem() / 1024 / 1024);
