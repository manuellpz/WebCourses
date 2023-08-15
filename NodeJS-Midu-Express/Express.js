const express = require('express')

const app = express()

//Solo por cuestiones de seguridad quitamos esta cabecera
app.disable('x-powered-by')

const PORT = process.env.PORT ?? 3000

app.get('/', (req, res) => {
   //Express dependiendo la respuesta que envies, automaticamente agrega el content-type
   res.send('<h1>This is my web page</h1>')
   //En Caso de JSON se tiene el metodo res.json({key:value}) y también automaticamente agrega el content-type correspondiente
})

app.get('/pokemon/ditto',(req,res)=>{
   const data = require('./pokemon/ditto.json')
   res.json(data)
})

app.post('/pokemon', (req, res) => {
   let body = ''

   //Escuchamos el evento data
   req.on('data', chunk => {
      body += chunk.toString();
   })

   //Cuando terminen los datos
   req.on('end', () => {
      const data = JSON.parse(body)
      res.status(201).json(data)
   })
})

//Es importante colocarlo al ultimo
app.use((req,res)=>{
   res.status(404).send('<h1>Error 404 Not Found</h1>')
})

app.listen(PORT, () => {
   console.log(`Listening on port: http://localhost:${PORT}`)
})