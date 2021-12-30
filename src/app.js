const express = require('express');
const cors = require('cors');

const dbData = require('./db/db.json');
const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.urlencoded({extended: true}));
// app.use(express.bodyParser());

app.get('/latestMovies', (req,res)=>{
    res.send(dbData.movies)
})

app.get('/latestMovies/:id', (req,res)=>{
    const id = req.params.id;
    const movieDetails = dbData.movies.filter(movie => movie.id == id)    
    res.send(movieDetails);
})

app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`)
})

