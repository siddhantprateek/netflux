import React from 'react';
import './moviebadge.style.css';
import NETFLIX from '../../assets/netflix_PNG10.png';
const MovieBadge = ({ movie }) => {
  return (
  <div className='movie-badge'>
      <div className="movie-banner">
        <img className="banner" src={movie.imageurl} alt="" height="200px"/>
        <div className="title">
          <p className='mov-title'>{movie.title}</p>
        </div>
      </div>

      <div className="netflix-logo">

        <img className="netflix" src={NETFLIX} height="30px" alt="" />
      </div>

      <div className="movie-options">
        
      </div>
  </div>
)};
export default MovieBadge;