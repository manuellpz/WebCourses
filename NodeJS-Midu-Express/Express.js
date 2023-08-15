const express = require('express')

const app = express()

//Solo por cuestiones de seguridad quitamos esta cabecera
app.disable('x-powered-by')

const PORT = process.env.PORT ?? 3000

app.use(express.json())


//Sería el concepto
// app.use((req,res,next) => {
//    if(req.method !== 'POST') return next()
//    if(req.headers['content-type'] !== 'application/json') return next()

//    //Solo llegan request que son post y que tienen el header content-type: application/json
//    let body = ''

//    req.on('data',chunk => {
//       body += chunk.toString()
//    })

//    req.on('end',()=>{
//       const data = JSON.parse(body)
//       req.body = data
//       next()
//    })
// })

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
   res.status(201).json(req.body)
})

//Es importante colocarlo al ultimo
app.use((req,res)=>{
   res.status(404).send('<h1>Error 404 Not Found</h1>')
})

app.listen(PORT, () => {
   console.log(`Listening on port: http://localhost:${PORT}`)
})
