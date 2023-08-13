const express = require("express");

const app = express();

const PORT = process.env.PORT ?? 3000;

const ditto = require("./pokemon/ditto.json");

app.get("/", (req, res) => {
  res.send("<h1>This Is My Web Page</h1>");
});

app.get("/pokemon/ditto", (req, res) => {
   res.json(ditto)
});

app.post('/pokemon',(req,res)=>{
   let body = ''

   //Escuchamos el evento data
   req.on('data',chunk=>{
      body += chunk.toString()
   })

   //Cuando termine
   req.on('end',()=>{
      const data = JSON.parse(body)
      res.status(201).json(data)
   })
})


app.use((req,res)=>{
   res.status(404).send('<h1>Error 404 NOT FOUND</h1>')
})

app.listen(PORT, () => {
  console.log(`Server Listening on port: http://localhost:${PORT}`);
});
