//El objeto process es un objeto global que proporciona información y control sobre el proceso actual de ejecución

//Argumentos de entrada
// console.log(process.argv);

//Controlar el proceso y su salida 0=OK 1=Error
// console.log(process.exit(0));

//Podemos controlar eventos del proceso
// process.on('exit',()=>{
//    //Por ejemplo limpiar la consola
//    console.clear();
// })

//Current Working Directory nos devuelve la ruta desde donde se está ejecutando el proceso
console.log(process.cwd());