const express = require('express')

const app = express()

const movies = require('./movies.json')

app.disable('x-powered-by')

//Recuperamos todas las peliculas
app.get('/movies', (req, res) => {
   const {genre} = req.query
   if(genre) {
      const filteredMovies = movies.filter(
         movie => movie.genre.includes(genre)
      )
      return res.json(filteredMovies)
   }
   
   res.json(movies)
})

//Recuperamos las peliculas por un ID
app.get('/movies/:id', (req, res) => {
   const { id } = req.params
   const movie = movies.find(movie => movie.id === id)
   if(movie) return res.json(movie)
   res.status(404).json({message:'Movie Not Found'})
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
   console.log(`Server listening on http://localhost:${PORT}`)
})