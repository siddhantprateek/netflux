import React,{ useState, useEffect } from "react";
import MovieBadge from "../movie-badge/movieBadge.component";
import './movielist.styles.css';
import axios from 'axios';
const MovieList = () => {
  const [movies, setMovies ] = useState();
  useEffect(()=> {
    const option = {
      method: 'GET',
      url: 'http://localhost:4000/api/v1/movies.json'
    };
    axios.request(option).then((response) => {
        setMovies(response.data.results);
    }).catch((error) => {
      console.error(error);
    })
  }, [])

  const first10movies = movies?.slice(4, 24);
  console.log( "MOVIES:", movies)
  return (
  <div className="movie-list">
      {first10movies?.map((movie) =>(
        <MovieBadge movie={movie}/>
      ))}
  </div>
)};
export default MovieList;
