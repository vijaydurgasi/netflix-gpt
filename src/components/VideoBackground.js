import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

function VideoBackground() {

    const trailerVideo = useSelector(store => store.movies?.trailerVideo);

    useMovieTrailer();

    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">

            <h1 className="text-3xl font-bold text-center">
                Welcome to Netflix 🎬
            </h1>

            <iframe
                className="absolute top-1/2 left-1/2 
                       min-w-full min-h-full 
                       -translate-x-1/2 -translate-y-1/2 
                       scale-150 pointer-events-none"
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo?.key}&modestbranding=1&rel=0`}
                title="Movie Trailer"
                allow="autoplay; encrypted-media"
            ></iframe>

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

            <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-black to-transparent"></div>

        </div>
    );

}

export default VideoBackground