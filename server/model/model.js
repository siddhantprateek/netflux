
const mongoose = require('mongoose')
const { Schema } = mongoose

const mymovieListSchema = new Schema({
    title: String,
    backdrop_path: String,
    poster_path: String,
    popularity: Number,
    overview: String,
    release_date: String,
    vote_average: Number
})


module.exports = mongoose.model("mymovielist", mymovieListSchema)