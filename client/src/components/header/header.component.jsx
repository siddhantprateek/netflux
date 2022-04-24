import NETFLUX from '../../assets/netfux-logox.png';
import Avatar from '../../assets/Netflix-avatar.png';
import SearchIcon from '../../assets/search-icon.png';
import './header.style.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useUserAuth } from '../../context/context';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [ showsearch, setSearch ] = useState(false)
  const setshowClass = showsearch ? 'browse display-block' : 'browse display-none';
  const { LogOut } = useUserAuth()
  const navigate = useNavigate()
  const handleLogOut = async () => {
      try {
          await LogOut()
          navigate("/in/login")
      }catch(error){
          console.log(error.message)
      }
  }

  return (
  <div className="nav-bar">
      <header className='nav-container'>
            <div className='nav-left'>
                <Link to="/">
                    <img src={NETFLUX} height='35px' alt="" />
                </Link>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/tvshows'>TV Shows</Link></li>
                    <li><Link to='/new'>New & Popular</Link></li>
                    <li><Link to='/mylist'>My List</Link></li>
                </ul>
            </div>
            <div className='nav-right'>
                <ul>
                    <li><img src={SearchIcon} onClick={() => setSearch(!showsearch)} alt=''/></li>
                    <li><input type="text" className={setshowClass} placeholder='Titles, People, Genre'/></li>
                    <li>Children</li>
                </ul>
                <div className='dropdown'>
                    <img className='avatar' src={Avatar} height='30px' alt="" />
                    <div className="user-dropdown">
                        <a href="/manage/profiles">Manage Profiles</a>
                        <a href="/">Children</a>
                        <a href="/">Account</a>
                        <a href="/">Help Center</a>
                        <a href="/" onClick={handleLogOut}>Sign out of Netflix</a>
                    </div>
                </div>
            </div>
      </header>
  </div>
  );
}

export default Header;