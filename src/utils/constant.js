

export const TMDB_API = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: "eyJhdWQiOiJjYmM5MTIzZmU5MmU4NTlmZmQ3NDUwNTc3NTc4ZThhNCIsIm5iZiI6MTc3MDcxMTA3NC43MzQwMDAyLCJzdWIiOiI2OThhZTgyMmMyN2FhZmUxZWU4ZWY5ZGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Oyv8ZDkd_AVEQmxHO-ASLXl6rKNbzQIm60smAzelqpw"
    },
};

export const API_KEY = "cbc9123fe92e859ffd7450577578e8a4";

export const NOW_PLAYING_API = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;

export const VIDEO_TRAILER_API = (movieid) => `https://api.themoviedb.org/3/movie/${movieid}/videos?api_key=${API_KEY}`;