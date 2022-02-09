const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 4000
const app = express();

// app.get('/', (req, res)=>{
//     res.send('Server is Running Perfect')
// })

// app.use(express.static(path.join(__dirname, "build")));

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// })

app.use(cors());

app.get('/', (req, res) => {
  res.send('server is running');
})

app.use('/api', require('./routes/route'))

app.listen(PORT,() => {
    console.log(`Server running at http://localhost:${PORT}/api/v1/movies.json`)
})



