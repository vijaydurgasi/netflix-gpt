import React from 'react'
import { useSelector } from "react-redux"
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if (movies === null) return;

    const mainmovie = movies[0];
    console.log("main-movie", mainmovie);
    return (
        <div>
            <VideoTitle />
            <VideoBackground />
        </div>

    )
}

export default MainContainer