import React from 'react';
import './moviebadge.style.css';
import NETFLIX from '../../assets/netflix_PNG10.png';
import PLAY from '../../assets/mediaicons/play.png';
import ADD from '../../assets/mediaicons/add.png';
import DISLIKE from '../../assets/mediaicons/dislike.png';
import LIKE from '../../assets/mediaicons/like.png';
import ADDED from '../../assets/mediaicons/added.png';
import MovieModal from '../movie-modal/movie-modal.components';

import { useState } from 'react';
const MovieBadge = ({ movie }) => {
  const [ isShown, setIsShown ] = useState(false);
  const [ show, setShowModal] = useState(false);
  const [ list, setList ] = useState(false);
  const IMG_URL = "https://image.tmdb.org/t/p/w780"
  return (
  <div className='movie-badge'
    onMouseEnter={() => setIsShown(true)}
    onMouseLeave={() => setIsShown(false)}
  >
      <div className="movie-banner" onClick={() => setShowModal(!show)}>
       <img className="banner" src={IMG_URL+movie.poster_path} alt="" height="200px"/> 
        <div className="title">
          <p className='mov-title'>{movie.original_title}</p>
        </div>

        {/* { show && <MovieModal movie={movie}/> } */}
        
      </div>

      <div className="netflix-logo">
        <img className="netflix" src={NETFLIX} height="30px" alt="" />
      </div>

      {
        isShown && (
        <div className="movie-options">
            <img src={PLAY} className="media-icon" alt="" />
            <img src={list ? ADDED : ADD}className="media-icon" alt="" onClick={() => setList(!list)}/>
            <img src={LIKE} className="media-icon" alt="" />
            <img src={DISLIKE} className="media-icon" alt="" />
        </div>)
      }
      
  </div>
)};
export default MovieBadge;