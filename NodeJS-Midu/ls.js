const fs = require('node:fs/promises')

// La función readdir nos devuelve los archivos contenidos en una ruta dada como parametro
const folder = process.argv[2] ?? '.'
fs.readdir(folder)
  .then((files) => {
    files.forEach((file) => {
      console.log(file)
    })
  })
  .catch((error) => console.log('Ha ocurrido un error: ', error))
