// import OZARK from "../../assets/ozark-59758728cf49f.jpg";
import "./home.style.css";
import PLAY from "../../assets/play.png";
import INFO from "../../assets/info.png";
import MovieList from "../../components/movies-list/movieList.component";
import banner from "./banner.json";
import '../../components/movies-list/movielist.styles.css';
import VIDEO from "../../assets/moneyheist.mp4";
import moneyheist from "../../assets/money-heist.png"
const Home = () => {
  return (
    <div className="home">
      <div className="home-banner">
        <video className="home-preview" autoPlay loop muted>
            <source src={VIDEO} type="video/mp4"/>
        </video>
        <div className="video-content">
          <img src={moneyheist} className="moneyheist-logo" alt="" />
          <h2>A break in the investigation and a mistake by <br/>one of the theives puts the professor at serious <br/> risk of being discoverd.</h2>
        </div>
        {/* <img className="home-preview" src={OZARK} alt="" srcset="" /> */}
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
        </div>
      </div>
      <div className="hollywood-action">
        <h4>Hollywood Movies</h4>
        <MovieList genre="Crime" type="movies" />
      </div>

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
                      <p className="switchLeft sliderButton" >◄</p>
            <p className="switchRight sliderButton" >►</p>
        </div>
      </div>

      <div className="trending-now">
        <h4>Trending Now</h4>
        <MovieList genre="romance" type="movies" />
      </div>
      <div className="tv-shows">
        <h4>TV Shows</h4>
        <MovieList genre="Thriller" type="tvshows" />
      </div>
      <div className="children-family-tv">
        <h4>Children & Family TV</h4>
        <MovieList genre="Family" type="movies" />
      </div>
      <div className="Only-on-Netflix">
        <h4>Only On Netflix</h4>
        <MovieList genre="action" type="movies" />
      </div>
    </div>
  );
};
export default Home;
