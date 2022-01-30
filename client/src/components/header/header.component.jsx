import NETFLUX from '../../assets/netfux-logox.png';
import Avatar from '../../assets/Netflix-avatar.png';
import SearchIcon from '../../assets/search-icon.png';
import './header.style.css';

const Header = () => {
  return (
  <div className="nav-bar">
      <header className='nav-container'>
            <div className='nav-left'>
                <img src={NETFLUX} height='35px' alt="" />
                <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                </ul>
            </div>
            <div className='nav-right'>
                <ul>
                    <li><img src={SearchIcon} alt=''/></li>
                    <li>Children</li>
                </ul>
                <img className='avatar' src={Avatar} height='30px' alt="" />
                <div className="user-dropdown">
                    
                </div>
            </div>
      </header>
  </div>
  );
}

export default Header;