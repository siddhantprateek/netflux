//title, src, rating, genre, release, synopsis, type
import "./movie-modal.styles.css";

const MovieModal = ({ show, movie }) => {

  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName} >

        <div className="movie-modal-content">
            <div className="close-div">
                <span class="close">&times;</span>
            </div>

            <div className="modal-movie-desc">
                <img className="modal-banner" src={movie.imageurl} alt="" />
                <div className="movie-desc-content">
                    <div className="movie-title-header">
                        <h1 className="modal-title">{movie.title}</h1>
                        <h2 className="movie-rating">{movie.imdbrating}</h2>
                    </div>
                    <p className="released"> {movie.released}</p>
                    <div className="synop-genre">
                        <div className="synopsis-section">
                            <p className="synopsis">{movie.synopsis}</p>
                        </div>
                        <p className="movie-genre">
                            Genres: {movie.genre.map((gen) => 
                            <a href="/" className="genre-tag">
                                {gen}
                            </a>
                        )}</p>
                    </div>
                        <p className="movie-type">Type: {movie.type}</p>

                </div>
            </div>
        </div>
    </div>
  );
};

export default MovieModal;
