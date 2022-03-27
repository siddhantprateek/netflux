import axios from "axios"

// MOVIES
const FETCH_MOVIE_ACTION = async () => {
    const data = await axios.get('http://localhost:4000/api/v1/movies/action', { type: 'movies', genre: 'action' })
    .then(res => console.log(res.data))
    .catch((error) => {
        console.error(error);
    });
    return data;
}


const FETCH_MOVIE_ROMANCE = async () => {
    const data = await axios.get('http://localhost:4000/api/v1/movies/', { type: 'movies', genre: 'romanace' })
    .catch((error) => {
        console.error(error);
    });
    return data;
}


const FETCH_MOVIE_HORROR = async () => {
    const data = await axios.get('http://localhost:4000/api/v1/movies/', { type: 'movies', genre: 'horror' })
    .catch((error) => {
        console.error(error);
    });
    return data;

}

const FETCH_MOVIE_FAMILY = async () => {
    const data = await axios.get('http://localhost:4000/api/v1/movies/', { type: 'movies', genre: 'family' })
    .catch((error) => {
        console.error(error);
    });
    return data;
}

const FETCH_MOVIE_THRILLER = async () => {
    const data = await axios.get('http://localhost:4000/api/v1/movies/', { type: 'movies', genre: 'thriller' })
    .catch((error) => {
        console.error(error);
    });
    return data;
}

const FETCH_MOVIE_HISTORY = async () => {
    const data = await axios.get('http://localhost:4000/api/v1/movies/', { type: 'movies', genre: 'history' })
    .catch((error) => {
        console.error(error);
    });
    return data;
}

const FETCH_MOVIE_FANTASY = async () => {
    const data = await axios.get('http://localhost:4000/api/v1/movies/', { type: 'movies', genre: 'fantasy' })
    .catch((error) => {
        console.error(error);
    });
    return data;
}

const FETCH_MOVIE_WAR = async () => {
    const data = await axios.get('http://localhost:4000/api/v1/movies/', { type: 'movies', genre: 'war' })
    .catch((error) => {
        console.error(error);
    });
    return data;
}

const FETCH_MOVIE_ADVENTURE = async () => {
    const data = await axios.get('http://localhost:4000/api/v1/movies/', { type: 'movies', genre: 'Adventure' })
    .catch((error) => {
        console.error(error);
    });
    return data;
}


// SERIES
const FETCH_SERIES_ACTION = async () => {
    const data = await axios.get('http://localhost:4000/api/v1/movies/', { type: 'series', genre: 'action' })
    .catch((error) => {
        console.error(error);
    });
    return data;
}


export {
    FETCH_MOVIE_ACTION,
    FETCH_MOVIE_ROMANCE,
    FETCH_MOVIE_HORROR,
    FETCH_MOVIE_FAMILY,
    FETCH_MOVIE_THRILLER,
    FETCH_MOVIE_HISTORY,
    FETCH_MOVIE_FANTASY,
    FETCH_MOVIE_WAR,
    FETCH_MOVIE_ADVENTURE,
    FETCH_SERIES_ACTION
};