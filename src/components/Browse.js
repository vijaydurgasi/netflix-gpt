import React from "react";
import Header from "./Header";

const Browse = () => {
    return (
        <div className="bg-black min-h-screen text-white">
            <Header />
            <div className="pt-24 px-12">
                <h1 className="text-3xl font-bold">
                    Welcome to Netflix 🎬
                </h1>
            </div>
        </div>
    );
};

export default Browse;
