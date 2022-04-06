import { useState } from "react";
import { PLAY, INFO, MUTE, UNMUTE } from "../../assets";
import doctorstrange from "../../assets/doctor-strange.png";
import { STRANGE } from "../../assets";
import "./tvshows.styles.css";
import MovieList from "../../components/movies-list/movieList.component";
const TVSHOW = () => {
  const [muted, setMute] = useState(false);
  const MOVIES_CONTAINERS = [
    {
      GenreHeader: "Trending Now",
      genre: "romance",
      type: "movies",
    },
    {
      GenreHeader: "TV Shows",
      genre: "thriller",
      type: "tv",
    },
    {
      GenreHeader: "Children & Family TV",
      genre: "family",
      type: "movies",
    },
    {
      GenreHeader: "Only On Netflix",
      genre: "action",
      type: "movies",
    },
    {
      GenreHeader: "Trending Now",
      genre: "comedy",
      type: "movies",
    },
    {
      GenreHeader: "Only On Netflix",
      genre: "action",
      type: "movies",
    },
    {
      GenreHeader: "Science Fiction",
      genre: "science-fiction",
      type: "movies",
    },
    {
      GenreHeader: "Drama",
      genre: "drama",
      type: "movies",
    },
    {
      GenreHeader: "Horror",
      genre: "horror",
      type: "movies",
    },{
      GenreHeader: "Documentary",
      genre: "documentary",
      type: "movies",
    },
  ];
  return (
    <div className="tvshows">
      <div className="home-banner">
        <video className="home-preview" autoPlay loop muted={!muted}>
          <source src={STRANGE} type="video/mp4" />
        </video>
        <div className="video-content">
          <img src={doctorstrange} className="moneyheist-logo" alt="" />
          <h2>
            Dr Stephen Strange casts a forbidden spell that <br />
            opens a portal to the multiverse. However, a threat <br />
            emerges that may be too big for his team to handle.
          </h2>
        </div>
        <div className="banner-btn">
          <button className="play-btn">
            <img
              className="bn-icon"
              src={PLAY}
              height="20px"
              alt=""
              srcset=""
            />{" "}
            Play
          </button>
          <button className="info-btn">
            <img
              className="bn-icon"
              src={INFO}
              height="30px"
              alt=""
              srcset=""
            />
            More Info
          </button>
          <img
            className="volume-btn"
            onClick={() => setMute(!muted)}
            src={!muted ? MUTE : UNMUTE}
            height="35px"
            alt=""
          />
        </div>
      </div>
      {MOVIES_CONTAINERS.map((data) => (
        <div className="movie-list-container">
          <h4>{data.GenreHeader}</h4>
          <MovieList genre={data.genre} type="movies" />
        </div>
      ))}
    </div>
  );
};
export default TVSHOW;
