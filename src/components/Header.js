import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import userlogo from "../assets/userlogo.jpg";

const Header = () => {
    const user = useSelector((store) => store.user);

    const handleSignOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="fixed top-0 left-0 w-full z-50">
            <div className="flex justify-between items-center px-12 py-6 backdrop-blur-sm">

                <h1 className="text-[#E50914] text-4xl font-extrabold tracking-wide drop-shadow-lg">
                    NETFLIX
                </h1>

                <div className="flex items-center gap-5">
                    <p className="text-white text-sm drop-shadow-md">
                        {user?.displayName || "User"}
                    </p>

                    <img
                        src={userlogo}
                        alt="user"
                        className="w-9 h-9 rounded-md"
                    />

                    <button
                        onClick={handleSignOut}
                        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm font-semibold transition"
                    >
                        Sign Out
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Header;
