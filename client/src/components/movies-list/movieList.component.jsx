import React,{ useState, useEffect } from "react";
import MovieBadge from "../movie-badge/movieBadge.component";
import { Swiper } from '../../../node_modules/swiper/react/swiper';
import { SwiperSlide } from '../../../node_modules/swiper/react/swiper-slide';
import '../../../node_modules/swiper/swiper.min.css'; 
import './movielist.styles.css';
import axios from 'axios';
const MovieList = ({genre, type}) => {
  const [movies, setMovies ] = useState();
  

  useEffect(()=> {
    const option = {
      method: 'GET',
      url: `http://localhost:4000/api/v1/movies/${genre}/${type}`,
      params: {
        genre: genre,
        type: type,
      }
    };
    axios.request(option).then((response) => {
        setMovies(response.data.results);
    }).catch((error) => {
      console.error(error);
    })
  })

  // const first10movies = .slice(4, 24);
  console.log( "MOVIES:", movies)
  return (
    <Swiper
    spaceBetween={80}
    slidesPerView={`auto`}
    pagination={{ clickable: true }}
    // onSlideChange={() => console.log('slide change')}
    // onSwiper={(swiper) => console.log(swiper)}
  >
    <div className="movie-list">
        {movies?.map((movie) =>(
          <SwiperSlide className="swiper-slide">
            <MovieBadge movie={movie}/>
          </SwiperSlide>
        ))}
    </div>

  </Swiper>
)};
export default MovieList;
