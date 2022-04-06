import "./home.style.css";
import { PLAY, INFO, VIDEO, moneyheist, MUTE, UNMUTE } from "../../assets";
import MovieList from "../../components/movies-list/movieList.component";
import banner from "./banner.json";
import "../../components/movies-list/movielist.styles.css";
import { useState } from "react";
const Home = () => {
  const [muted, setMute] = useState(false);
  const MOVIES_CONTAINERS = [
    {
      GenreHeader: "Trending Now",
      genre: "romance",
      type: "movies" 
    },
    {
      GenreHeader: "TV Shows",
      genre: "thriller",
      type: "tv" 
    },
    {
      GenreHeader: "Children & Family TV",
      genre: "family",
      type: "movies" 
    },
    {
      GenreHeader: "Only On Netflix",
      genre: "action",
      type: "movies" 
    },
    {
      GenreHeader: "Trending Now",
      genre: "comedy",
      type: "movies" 
    }
  ]
  return (
    <div className="home">
      <div className="home-banner">
        <video className="home-preview" autoPlay loop muted={!muted}>
          <source src={VIDEO} type="video/mp4" />
        </video>
        <div className="video-content">
          <img src={moneyheist} className="moneyheist-logo" alt="" />
          <h2>
            A break in the investigation and a mistake by <br />
            one of the theives puts the professor at serious <br /> risk of
            being discoverd.
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

      <div className="hollywood-action">
        <h3>Hollywood Movies</h3>
        <MovieList genre="Crime" type="movies" />
      </div>
      {/* Top 10 Movies */}
      <div className="trending top-10">
        <div className="carousel-container">
          <h4>Top10</h4>

          {banner.map((mov) => (
            <div className="trend-num">
              <h3 className="number">{mov.rank}</h3>
              <div className="trend-mov">
                <img className="top10-img" src={mov.src} alt="" />
              </div>
            </div>
          ))}
          <p className="switchLeft sliderButton">◄</p>
          <p className="switchRight sliderButton">►</p>
        </div>
      </div>

      {
      MOVIES_CONTAINERS.map( data => (
        <div className="movie-list-container">
          <h4>{data.GenreHeader}</h4>
          <MovieList genre={data.genre} type="movies" />
        </div>
      ))}

    </div>
  );
};
export default Home;
