import React from 'react'
import { useSelector } from "react-redux"
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if (movies === null) return;

    const mainmovie = movies[0];
    console.log("main-movie", mainmovie);

    const { original_title, overview } = mainmovie
    return (
        <div className="relative w-full min-h-screen pt-10 md:pt-20">
            <VideoBackground />
            <VideoTitle title={original_title} overview={overview} />
        </div>

    );

}

export default MainContainer