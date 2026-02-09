import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

import user from "../assets/user.jpg";

const Header = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="fixed top-0 left-0 w-full px-8 py-4 
                    flex justify-between items-center 
                    bg-gray-200/70 backdrop-blur-md 
                    shadow-md z-50">
            <div className="absolute top-0 left-0 px-10 py-6 z-50 mt-28">
                <h1 className="text-[#E50914] text-5xl font-black tracking-wide drop-shadow-lg">
                    NETFLIX
                </h1>

            </div>

            <div className="flex items-center gap-4">

                <img
                    src={user}
                    alt="user"
                    className="w-10 h-10 rounded-md object-cover cursor-pointer"
                />

                <button
                    onClick={handleSignOut}
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md 
                     text-sm font-semibold transition duration-200"
                >
                    Sign Out
                </button>

            </div>
        </div>
    );
};

export default Header;
