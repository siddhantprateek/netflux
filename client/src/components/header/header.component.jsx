import NETFLUX from '../../assets/netfux-logox.png';
import Avatar from '../../assets/Netflix-avatar.png';
import SearchIcon from '../../assets/search-icon.png';
import './header.style.css';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
  <div className="nav-bar">
      <header className='nav-container'>
            <div className='nav-left'>
                <img src={NETFLUX} height='35px' alt="" />
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/tvshows'>TV Shows</Link></li>
                    <li><Link to='/new'>New & Popular</Link></li>
                    <li><Link to='/mylist'>My List</Link></li>
                </ul>
            </div>
            <div className='nav-right'>
                <ul>
                    <li><img src={SearchIcon} alt=''/></li>
                    <li>Children</li>
                </ul>
                <div className='dropdown'>
                    <img className='avatar' src={Avatar} height='30px' alt="" />
                    <div className="user-dropdown">
                        <a href="/">Manage Profiles</a>
                        <a href="/">Children</a>
                        <a href="/">Account</a>
                        <a href="/">Help Center</a>
                        <a href="/">Sign out of Netflix</a>
                    </div>
                </div>
            </div>
      </header>
  </div>
  );
}

export default Header;