import React from 'react';
import './moviebadge.style.css';
import NETFLIX from '../../assets/netflix_PNG10.png';
import PLAY from '../../assets/mediaicons/play.png';
import ADD from '../../assets/mediaicons/add.png';
import DISLIKE from '../../assets/mediaicons/dislike.png';
import LIKE from '../../assets/mediaicons/like.png';

import { useState } from 'react';
const MovieBadge = ({ movie }) => {
  const [ isShown, setIsShown ] = useState(false);
  return (
  <div className='movie-badge'
    onMouseEnter={() => setIsShown(true)}
    onMouseLeave={() => setIsShown(false)}
  >
      <div className="movie-banner">
        <img className="banner" src={movie.imageurl} alt="" height="200px"/>
        <div className="title">
          <p className='mov-title'>{movie.title}</p>
        </div>
      </div>

      <div className="netflix-logo">
        <img className="netflix" src={NETFLIX} height="30px" alt="" />
      </div>

      {
        isShown && (
        <div className="movie-options">
            <img src={PLAY} className="media-icon" alt="" />
            <img src={ADD}className="media-icon" alt="" />
            <img src={DISLIKE} className="media-icon" alt="" />
            <img src={LIKE} className="media-icon" alt="" />
        </div>)
      }
  </div>
)};
export default MovieBadge;