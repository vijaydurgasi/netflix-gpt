
export const TMDB_API = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: "Bearer " + process.env.REACT_APP_TOKEN,
    },
};

export const API_KEY = process.env.REACT_APP_API;

export const BASE_URL = "https://api.themoviedb.org/3";

export const NOW_PLAYING_API = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;

export const VIDEO_TRAILER_API = (movieid) => `https://api.themoviedb.org/3/movie/${movieid}/videos?api_key=${API_KEY}`;

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const POPULAR_API = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

export const TOP_RATED_API = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

export const UPCOMING_API = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;

export const TRENDING_API = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`;

