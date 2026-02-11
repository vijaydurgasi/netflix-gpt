import React from "react";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="absolute top-1/3 left-12 md:left-24 max-w-xl text-white z-10 mt-32">

            <h1 className="text-xl font-bold mb-6">
                {title}
            </h1>

            <p className="text-mg mb-8 text-gray-200 line-clamp-3">
                {overview}
            </p>

            <div className="flex gap-4">
                <button className="bg-white text-black px-8 py-3 rounded-md font-semibold text-mg hover:bg-gray-200 transition">
                    ▶ Play
                </button>

                <button className="bg-gray-700/70 text-white px-8 py-3 rounded-md font-semibold text-mg hover:bg-gray-600 transition">
                    ℹ More Info
                </button>
            </div>

        </div>
    );
};

export default VideoTitle;
