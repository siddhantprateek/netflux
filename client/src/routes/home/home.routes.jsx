import OZARK from '../../assets/ozark-59758728cf49f.jpg';
import './home.style.css';
function Home() {
  return (
      <div>
          <div className="home-banner">
            <img className='ozark' src={OZARK} alt="" srcset="" />
            <div className="banner-btn">
                <button className='play-btn'>Play</button>
                <button className='info-btn'>More Info</button>
            </div>
          </div>
      </div>
  )
}

export default Home;
