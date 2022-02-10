import OZARK from '../../assets/ozark-59758728cf49f.jpg';
import './home.style.css';
import PLAY from '../../assets/play.png';
import INFO from '../../assets/info.png';
import MovieList from '../../components/movies-list/movieList.component';
const Home = () => {
  return (
      <div className='home'>
          <div className="home-banner">
            <img className='ozark' src={OZARK} alt="" srcset="" />
            <div className="banner-btn">
                <button className='play-btn'><img className="bn-icon" src={PLAY} height="20px" alt="" srcset="" /> Play</button>
                <button className='info-btn'><img className="bn-icon" src={INFO} height="30px" alt="" srcset="" />More Info</button>
            </div>
          </div>
          <div className="hollywood-action">
            <h4>Hollywood Movies</h4>
              <MovieList genre="Crime" type="movies"/>
          </div>
          <div className="trending-now">
            <h4>Trending Now</h4>
              <MovieList genre="romance" type="movies"/>
          </div>
          <div className="tv-shows">
            <h4>TV Shows</h4>
              <MovieList genre="Thriller" type="tvshows"/>
          </div>
          <div className="children-family-tv">
            <h4>Children & Family TV</h4>
              <MovieList genre="Family" type="movies"/>
          </div>
          <div className="Only-on-Netflix">
            <h4>Only On Netflix</h4>
              <MovieList genre="action" type="movies"/>
          </div>
      </div>
  )
}
export default Home;
