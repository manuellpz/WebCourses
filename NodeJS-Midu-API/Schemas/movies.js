//ZOD es una herramienta que nos permite validar datos
const z = require('zod')

const movieSchema = z.object({
   title: z.string(),
   year: z.number().int().min(1900).max(2024),
   director:z.string(),
   duration:z.number().int().positive(),
   rate:z.number().min(0).max(10).default(1),
   poster:z.string().url(),
   genre:z.array(
      z.enum(["Drama","Action","Crime","Sci-Fi","Adventure","Romance","Animation","Biography","Fantasy"])
   )
})

function validateMovie(object) {
   return movieSchema.safeParse(object)
}

module.exports = {
   validateMovie
}