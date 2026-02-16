import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

function VideoBackground() {

    const trailerVideo = useSelector(store => store.movies?.trailerVideo);

    useMovieTrailer();
    return (
        <div className="absolute inset-0 overflow-hidden">

            {trailerVideo && (
                <iframe
                    className="absolute top-1/2 left-1/2
                    min-w-full min-h-full
                    -translate-x-1/2 -translate-y-1/2
                    scale-110 md:scale-125
                    brightness-110 md:brightness-125
                    contrast-105 md:contrast-110
                    saturate-105 md:saturate-110
                    pointer-events-none"

                    src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo?.key}&modestbranding=1&rel=0`}
                    title="Movie Trailer"
                    allow="autoplay; encrypted-media"
                />
            )}

            <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>

        </div>

    );


}

export default VideoBackground