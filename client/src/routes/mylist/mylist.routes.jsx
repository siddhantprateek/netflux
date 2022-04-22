import React, { useEffect, useState } from "react";
import axios from "../../config/axios";
import "./mylist.styles.css";
import { MovieBadge } from "../../components";

const MyList = () => {
  const [mymovies, setMyMovies] = useState([]);
  useEffect(() => {
    axios
      .get("/api/v1/tmdb/mylist")
      .then((res) => {
        console.log(res.data);
        setMyMovies(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  const NoMovieAdded = () => {
    return (
      <div className="no-movies">
        <h2>No movies added yet</h2>
        <a href="/">
          <button className="Netflix-home-btn">Back to Netflix Home</button>
        </a>
      </div>
    );
  };
  return (
    <div className="my-list-page">
      {mymovies?.length === 0 ? (
        <NoMovieAdded />
      ) : (
        <div id="my-movie-list" className="my-movie-list">
          {mymovies?.map((movie) => (
            <MovieBadge movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyList;
