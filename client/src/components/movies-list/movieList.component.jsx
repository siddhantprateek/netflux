import React, { useState, useEffect } from "react";
import MovieBadge from "../movie-badge/movieBadge.component";
import "./movielist.styles.css";
import axios from "../../config/axios";

const MovieList = ({ genre, type }) => {
  const [movies, setMovies] = useState();
  const slideScrollLeft = () => {};
  const slideScrollRight = () => {};

  useEffect(() => {
    axios.get(`/api/v1/tmdb/${genre}`)
    .then(res => {
      const results = res.data.results
      setMovies(results)
    })
    .catch(err => console.error(err))
  })
  
  return (
    <div className="carousel-container">
      <div id="movie-list" className="movie-list">
        {movies?.map((movie) => (
          <MovieBadge movie={movie} />
        ))}
        {/* Slider */}
        <p className="switchLeft sliderButton" onClick={slideScrollLeft()}>
          ◄
        </p>
        <p className="switchRight sliderButton" onClick={slideScrollRight()}>
          ►
        </p>
      </div>
    </div>
  );
};
export default MovieList;
