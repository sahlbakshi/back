// REQUIRE
const mongoose = require('mongoose')

// CONNECT
// 27017 is default port
// moviesDB is the database that will be used
mongoose.connect('mongodb://localhost:27017/movies')
.then(() => { console.log("CONNECTION OPEN") })
.catch((error) => { console.log(error) })


// SCHEMA
// defining a schema
const movieSchema = new mongoose.Schema(
    {
        tite: String,
        year: Number,
        Score: Number,
        Rating: String,
    }
)

// MODEL
// defining a model class named Movie
// string is the name of the model and has
//  to start with UPPERCASE and be singular
const Movie = mongoose.model('Movie', movieSchema) 


// USE NOW

// now we can make movies
const amadues = new Movie({title: "Amadeus", year: 1982, score: 9.2, rating: "R"})
const inception = new Movie({title: "Inception", year: 2012, score: 9.0, rating: "R"})
const spiderman = new Movie({title: "Spiderman", year: 2021, score: 8.9, rating: "R"})
const thebatman = new Movie({title: "The Batman", year: 2022, score: 8.8, rating: "R"})

// save movies to database
amadues.save()
inception.save()
spiderman.save()
thebatman.save()
