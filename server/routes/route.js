const axios = require('axios');
const express = require('express');
const router = express.Router();



router.get('/search/movies', (req, res) => {
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

router.get('/v1/movies.json', (req, res)=>{
    const options = {
        method: 'GET',
        url: 'https://ott-details.p.rapidapi.com/advancedsearch',
        params: {
          start_year: '1990',
          end_year: '2020',
          min_imdb: '4',
          max_imdb: '10',
          genre: 'action',
          language: 'english',
          type: 'tvshows',
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

module.exports = router;