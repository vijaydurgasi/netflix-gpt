

export const TMDB_API = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhdWQiOiJjYmM5MTIzZmU5MmU4NTlmZmQ3NDUwNTc3NTc4ZThhNCIsIm5iZiI6MTc3MDcxMTA3NC43MzQwMDAyLCJzdWIiOiI2OThhZTgyMmMyN2FhZmUxZWU4ZWY5ZGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Oyv8ZDkd_AVEQmxHO-ASLXl6rKNbzQIm60smAzelqpw"
    },
};

export const API_KEY = "cbc9123fe92e859ffd7450577578e8a4";

export const BASE_URL = "https://api.themoviedb.org/3";

export const NOW_PLAYING_API = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;

export const VIDEO_TRAILER_API = (movieid) => `https://api.themoviedb.org/3/movie/${movieid}/videos?api_key=${API_KEY}`;

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const POPULAR_API = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

export const TOP_RATED_API = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

export const UPCOMING_API = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;

export const TRENDING_API = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`;

