import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'
const MovieCard = ({ poster_path }) => {
    if (!poster_path) return null;

    return (
        <div className=" flex-shrink-0 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] cursor-pointer
    transform transition duration-300 hover:scale-105 hover:z-20">

            <img
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                src={IMG_CDN_URL + poster_path}
                alt="movie poster"
            />
        </div>
    );
};

export default MovieCard