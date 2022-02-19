
// import VIDEO from "../../assets/moneyheist.mp4";
import PLAY from "../../assets/play.png";
import INFO from "../../assets/info.png";
import doctorstrange from "../../assets/doctor-strange.png"
import './tvshows.styles.css';
const TVSHOW = () => {
  return (
    <div className="tvshows">
            <div className="home-banner">
            <video className='home-preview' autoPlay loop muted>
              <source src={`https://user-images.githubusercontent.com/43869046/154786309-e2ccdef6-9dfc-461b-95a5-bed968e6c4e4.mp4`} type="video/mp4"/>
            </video>
          <div className="video-content">
            <img src={doctorstrange} className="moneyheist-logo" alt="" />
            <h2>Dr Stephen Strange casts a forbidden spell that <br/>opens a portal to the multiverse. However, a threat <br/>emerges that may be too big for his team to handle.</h2>
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
        </div>
      </div>
    </div>
  );
};
export default TVSHOW;
