const express = require('express')
const crypto = require('node:crypto')
const z = require('zod')

const app = express()

const movies = require('./movies.json')
const { validateMovies, validatePartialMovie } = require('./Schemas/movies')

app.use(express.json())
app.disable('x-powered-by')

//Recuperamos todas las peliculas
app.get('/movies', (req, res) => {
   const { genre } = req.query
   if (genre) {
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
   if (movie) return res.json(movie)
   res.status(404).json({ message: 'Movie Not Found' })
})

//Creamos una pelicula con POST
app.post('/movies', (req, res) => {

   const result = validateMovies(req.body)

   if (result.error)
      return res.status(400).json({ error: JSON.parse(result.error.message) })



   const newMovie = {
      id: crypto.randomUUID(),
      ...result.data
   }

   //Esto no sería REST porque estamos almacenando el estado de la aplicacion en memoria
   movies.push(newMovie)

   res.status(201).json(newMovie)
})

app.patch('/movies/:id', (req, res) => {
   const result = validatePartialMovie(req.body)
   const { id } = req.params

   const movieIndex = movies.findIndex(movie => movie.id == id)

   if(movieIndex == -1)
      res.status(400).json({message:'Movie Not Found'})

   const updateMovie = {
      ...movies[movieIndex],
      ...result.data
   }

   movies[movieIndex] = updateMovie

   return res.json(updateMovie)

})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
   console.log(`Server listening on http://localhost:${PORT}`)
})