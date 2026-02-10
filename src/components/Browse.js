import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

    useNowPlayingMovies();

    return (
        <div className="bg-black min-h-screen text-white">
            <Header />
            <div className="pt-24 px-12">
                <h1 className="text-3xl font-bold">
                    Welcome to Netflix 🎬
                </h1>
            </div>
            <MainContainer />
            <SecondaryContainer />
        </div>
    );
};

export default Browse;
