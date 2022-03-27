import React, { useState, useEffect } from "react";
import MovieBadge from "../movie-badge/movieBadge.component";
import "./movielist.styles.css";
import axios from "axios";

const MovieList = ({ genre, type }) => {
  const [movies, setMovies] = useState();
  const slideScrollLeft = () => {};
  const slideScrollRight = () => {};
  useEffect(() => {
    const option = {
      method: "GET",
      url: `http://localhost:4000/api/v1/movies/${genre}/${type}`,
      params: {
        genre: genre,
        type: type,
      },
    };
    axios
      .request(option)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  

  console.log("MOVIES:", movies);
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
