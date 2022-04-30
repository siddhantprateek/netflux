const axios = require('axios');
const express = require('express');
const router = express.Router();
const Model = require('../model/model')


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
            res.status(200).res.json(response.data);
          
      }).catch((error)=> {
          console.error(error);
      });
})

router.get('/v1/movies/:genre/:type', (req, res) => {
  const genre = req.params.genre
  const type = req.params.type
  const options = {
    method: 'GET',
    url: 'https://ott-details.p.rapidapi.com/advancedsearch',
    params: {
      start_year: '1990',
      end_year: '2020',
      min_imdb: '4',
      max_imdb: '10',
      genre: genre,
      language: 'english',
      type: type,
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

router.get('/v1/movies.json', (req, res)=>{
    const options = {
        method: 'GET',
        url: 'https://ott-details.p.rapidapi.com/advancedsearch',
        params: {
          start_year: '1990',
          end_year: '2020',
          min_imdb: '4',
          max_imdb: '10',
          genre: req.query.genre,
          language: 'english',
          type: req.query.type,
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

const MOVIE_URL = "https://api.themoviedb.org/3/movie/popular"
// Action          28       ✅
// Adventure       12       ✅  
// Animation       16       ✅
// Comedy          35       ✅
// Crime           80       ✅
// Documentary     99       ✅ 
// Drama           18       ✅ 
// Family          10751    ✅
// Fantasy         14       ✅
// History         36       ✅
// Horror          27       ✅
// Music           10402 
// Mystery         9648     ✅
// Romance         10749    ✅
// Science Fiction 878      ✅
// TV Movie        10770
// Thriller        53       ✅
// War             10752    ✅
// Western         37       ✅
router.get('/v1/tmdb/Western', (req, res) => {
  axios.get(`${MOVIE_URL}?api_key=${process.env.TMDB_API}&with_genres=37`)
    .then((response) => res.json(response.data))
    .catch((error) => console.error(error))
})

router.get('/v1/tmdb/music', (req, res) => {
  axios.get(`${MOVIE_URL}?api_key=${process.env.TMDB_API}&with_genres=10402`)
    .then((response) => res.json(response.data))
    .catch((error) => console.error(error))
})

router.get('/v1/tmdb/war', (req, res) => {
  axios.get(`${MOVIE_URL}?api_key=${process.env.TMDB_API}&with_genres=10752`)
    .then((response) => res.json(response.data))
    .catch((error) => console.error(error))
})

router.get('/v1/tmdb/mystery', (req, res) => {
  axios.get(`${MOVIE_URL}?api_key=${process.env.TMDB_API}&with_genres=9648`)
    .then((response) => res.json(response.data))
    .catch((error) => console.error(error))
})

router.get('/v1/tmdb/science-fiction', (req, res) => {
  axios.get(`${MOVIE_URL}?api_key=${process.env.TMDB_API}&with_genres=878`)
    .then((response) => res.json(response.data))
    .catch((error) => console.error(error))
})


router.get('/v1/tmdb/history', (req, res) => {
  axios.get(`${MOVIE_URL}?api_key=${process.env.TMDB_API}&with_genres=36`)
    .then((response) => res.json(response.data))
    .catch((error) => console.error(error))
})

router.get('/v1/tmdb/comedy', (req, res) => {
  axios.get(`${MOVIE_URL}?api_key=${process.env.TMDB_API}&with_genres=35`)
    .then((response) => res.json(response.data))
    .catch((error) => console.error(error))
})

router.get('/v1/tmdb/fantasy', (req, res) => {
  axios.get(`${MOVIE_URL}?api_key=${process.env.TMDB_API}&with_genres=14`)
    .then((response) => res.json(response.data))
    .catch((error) => console.error(error))
})

router.get('/v1/tmdb/family', (req, res) => {
  axios.get(`${MOVIE_URL}?api_key=${process.env.TMDB_API}&with_genres=10751`)
    .then((response) => res.json(response.data))
    .catch((error) => console.error(error))
})

router.get('/v1/tmdb/animation', (req, res) => {
  axios.get(`${MOVIE_URL}?api_key=${process.env.TMDB_API}&with_genres=16`)
    .then((response) => res.json(response.data))
    .catch((error) => console.error(error))
})

router.get('/v1/tmdb/horror', (req, res) => {
  axios.get(`${MOVIE_URL}?api_key=${process.env.TMDB_API}&with_genres=27`)
    .then((response) => res.json(response.data))
    .catch((error) => console.error(error))
})

router.get('/v1/tmdb/adventure', (req, res) => {
  axios.get(`${MOVIE_URL}?api_key=${process.env.TMDB_API}&with_genres=12`)
    .then((response) => res.json(response.data))
    .catch((error) => console.error(error))
})

router.get('/v1/tmdb/documentary', (req, res) => {
  axios.get(`${MOVIE_URL}?api_key=${process.env.TMDB_API}&with_genres=99`)
    .then((response) => res.json(response.data))
    .catch((error) => console.error(error))
})

router.get('/v1/tmdb/crime', (req, res) => {
  axios.get(`${MOVIE_URL}?api_key=${process.env.TMDB_API}&with_genres=80`)
    .then((response) => res.json(response.data))
    .catch((error) => console.error(error))

})

router.get('/v1/tmdb/drama', (req, res) => {
  axios.get(`${MOVIE_URL}?api_key=${process.env.TMDB_API}&with_genres=18`)
    .then((response) => res.json(response.data))
    .catch((error) => console.error(error))

})

router.get('/v1/tmdb/thriller', (req, res) => {
  axios.get(`${MOVIE_URL}?api_key=${process.env.TMDB_API}&with_genres=53`)
    .then((response) => res.json(response.data))
    .catch((error) => console.error(error))

})

router.get('/v1/tmdb/action', (req, res) => {
  axios.get(`${MOVIE_URL}?api_key=${process.env.TMDB_API}&with_genres=28`)
    .then((response) => res.json(response.data))
    .catch((error) => console.error(error))

})

router.get('/v1/tmdb/romance', (req, res) => {
  axios.get(`${MOVIE_URL}?api_key=${process.env.TMDB_API}&with_genres=10749`)
    .then((response) => res.json(response.data))
    .catch((error) => console.error(error))
})

router.get('/v1/tmdb/romance1', async (req, res) => {
  const response = await axios.get(`${MOVIE_URL}?api_key=${process.env.TMDB_API}&with_genres=10749`)
  res.status(200).send(response.data)
})

router.get('/v1/tmdb/romance/:hello/:feel', (req, res) => {
  const {hello, feel} = req.params
  res.status(200).send({hello, feel})
  // axios.get(`${MOVIE_URL}?api_key=${process.env.TMDB_API}&with_genres=10749`)
  //   .then((response) => res.json(response.data))
  //   .catch((error) => console.error(error))
})

router.get('/v1/tmdb/mylist', async (req, res) => {
  try {
    const response = await Model.find({})
    res.status(200).send(response)
  }catch(err){
    res.send(err)
  }
})

router.post('/v1/add', async(req, res) => {
  const data = req.body
  try{
    const response = await Model.create(data)
    res.status(201).json(response)
  }catch(err){
    res.send(err)
  }
})



module.exports = router;