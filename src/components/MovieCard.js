import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'
const MovieCard = ({ poster_path }) => {
    if (!poster_path) return null;

    return (
        <div className="min-w-[180px] cursor-pointer transform transition duration-300 hover:scale-105 hover:z-20">
            <img
                className="rounded-lg shadow-lg"
                src={IMG_CDN_URL + poster_path}
                alt="movie poster"
            />
        </div>
    );
};


export default MovieCard