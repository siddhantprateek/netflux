import React,{ useState, useEffect } from "react";
import MovieBadge from "../movie-badge/movieBadge.component";
import '../../../node_modules/swiper/swiper.min.css';
import './movielist.styles.css';
// import Carousel from "../carousel/carousel.components";
import axios from 'axios';
const MovieList = ({genre, type}) => {
  const [movies, setMovies ] = useState();
  // const sliders = document.getElementById('movie-list');
  const slideScrollLeft = () => {}
  const slideScrollRight = () => {}

  useEffect(()=> {
    const option = {
      method: 'GET',
      url: `http://localhost:4000/api/v1/movies/${genre}/${type}`,
      params: {
        genre: genre,
        type: type,
      }
    };
    axios.request(option).then((response) => {
      setMovies(response.data.results);
    }).catch((error) => {
      console.error(error);
    })
  })
  
  
  // const first10movies = movies?.slice(5, 10);
  console.log( "MOVIES:", movies)
  return (
    <div className="carousel-container">
      <div id="movie-list" className="movie-list">

          {movies?.map((movie) =>(
            <MovieBadge movie={movie}/>
            ))}
            <p className="switchLeft sliderButton" onClick={slideScrollLeft()} >◄</p>
            <p className="switchRight sliderButton" onClick={slideScrollRight()}>►</p>
      </div>
    </div>
)};
export default MovieList;
