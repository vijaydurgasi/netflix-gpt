import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    if (!movies) return null;

    return (
        <div className="px-4 md:px-8 mt-8">
            <h1 className="text-2xl font-bold mb-4 tracking-wide">
                {title}
            </h1>

            <div className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        poster_path={movie.poster_path}
                    />
                ))}
            </div>
        </div>
    );
};


export default MovieList