const express = require('express');
const cors = require('cors');
const axios = require('axios')
const dotenv = require('dotenv')
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

app.get('/api/search/movies', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://ott-details.p.rapidapi.com/search',
        params: {title: 'Endgame', page: '1'},
        headers: {
          'x-rapidapi-host': 'ott-details.p.rapidapi.com',
          'x-rapidapi-key': process.env.RAPID_API_KEY
        }
      };
      
      axios.request(options).then((response) =>{
            res.json(response.data);
      }).catch((error)=> {
          console.error(error);
      });
})

app.get('/api/v1/movies.json', (req, res)=>{
    const options = {
        method: 'GET',
        url: 'https://ott-details.p.rapidapi.com/advancedsearch',
        params: {
          start_year: '1970',
          end_year: '2020',
          min_imdb: '6',
          max_imdb: '7.8',
          genre: 'action',
          language: 'english',
          type: 'movie',
          sort: 'latest',
          page: '1'
        },
        headers: {
          'x-rapidapi-host': 'ott-details.p.rapidapi.com',
          'x-rapidapi-key': process.env.RAPID_API_KEY
        }
      };
      axios.request(options).then((response)=> {
          res.json(response.data);
      }).catch((error) => {
          console.error(error);
      });
})



app.listen(PORT,() => {
    console.log(`Server running at http://localhost:${PORT}`)
})



