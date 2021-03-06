const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const path = require('path')

// server config
const PORT = process.env.PORT || 4000
const app = express();
dotenv.config();

// build
app.use(express.static(path.join(__dirname, "./client/build")))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'))
})
app.get('/tvshows', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'))
})
app.get('/mylist', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'))
})
app.get('/in', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'))
})

// database connection
mongoose.connect(process.env.ATLAS_DB_URI)
const db = mongoose.connection
db.once('open', () => {
  console.log('Database is Connect')
})

// middleware
app.use(express.json())
app.use(cors());

app.use('/api', require('./routes/route.js'))

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/api/v1/tmdb`)
})



