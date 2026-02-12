import React from 'react'
import GptSearchBar from './GptSearchBar'
import netflix from "../assets/netflix.jpg"

const GptSearch = () => {
    return (
        <div className="relative min-h-screen w-screen text-white">
            <img
                src={netflix}
                alt="background"
                className="absolute inset-0 w-full h-full object-cover 
             brightness-125 contrast-110 saturate-110"
            />

            <div className="absolute inset-0 bg-black/30"></div>

            <div className="relative z-10">
                <GptSearchBar />
            </div>

        </div>
    )
}

export default GptSearch
