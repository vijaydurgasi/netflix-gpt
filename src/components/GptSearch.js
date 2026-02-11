import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import netflix from "../assets/netflix.jpg"

const GptSearch = () => {
    return (
        <div className="relative min-h-screen w-screen text-white overflow-hidden">
            <img
                src={netflix}
                alt="background"
                className="absolute inset-0 w-full h-full object-cover 
             brightness-125 contrast-110 saturate-110"
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10">
                <GptSearchBar />
                <GptMovieSuggestions />
            </div>

        </div>
    )
}

export default GptSearch
