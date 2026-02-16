import React from "react";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="absolute top-1/2 md:top-1/2 
        left-4 md:left-24 right-4 md:right-auto
        max-w-md md:max-w-xl text-white z-10">

            <h1 className="text-2xl md:text-4xl font-bold mb-4">
                {title}
            </h1>

            <p className="text-sm md:text-base mb-6 text-gray-200 line-clamp-3">
                {overview}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="bg-white text-black px-5 md:px-8 py-2 md:py-3 rounded-md font-semibold text-sm md:text-base hover:bg-gray-200 transition">
                    ▶ Play
                </button>

                <button className="bg-gray-700/70 text-white px-5 md:px-8 py-2 md:py-3 rounded-md font-semibold text-sm md:text-base hover:bg-gray-600 transition">
                    ℹ More Info
                </button>
            </div>

        </div>
    );
};

export default VideoTitle;
