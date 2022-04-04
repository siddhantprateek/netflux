const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 4000
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('server is running');
})

app.use('/api', require('./routes/route.js'))

app.listen(PORT,() => {
    console.log(`Server running at http://localhost:${PORT}/api/v1/tmdb`)
})



