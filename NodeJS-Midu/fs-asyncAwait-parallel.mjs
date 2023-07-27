/*
En paralelo significa que podemos continuar una vez haya leido los dos archivos (leidos al mismo tiempo)
*/

import { readFile } from "node:fs/promises";


Promise.all([
   readFile('./archivo.txt','utf-8'),
   readFile('./archivo2.txt','utf-8')
])
.then(([firstText,SecondText])=>{
   console.log('First Text: ',firstText);
   console.log('Second Text: ',SecondText);
})