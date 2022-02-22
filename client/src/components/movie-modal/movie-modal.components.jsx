//title, src, rating, genre, release, synopsis, type
const MovieModal = ({title, src}) => {
    return(
        <div>
            <p>{title}</p>
            <img src={src} alt="" />
        </div>
)}

export default MovieModal