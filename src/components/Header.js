import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import userlogo from "../assets/userlogo.jpg";
import { toggleGptsearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/languageSlice";
import { clearGptResults } from "../utils/gptSlice";

const Header = () => {

    const dispatch = useDispatch();

    const user = useSelector((store) => store.user);

    const currentLang = useSelector(store => store.language.lang);

    const showGptSearch = useSelector(store => store.gpt.showGptSearch);

    const handleSignOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error(error);
        }
        dispatch(clearGptResults());
    };

    const handleGptSearchClick = () => {
        dispatch(toggleGptsearchView());
    }


    return (
        <div className="fixed top-0 left-0 w-full z-50">
            <div className="flex justify-between items-center h-16 md:h-20 px-4 md:px-12 backdrop-blur-sm">

                <h1 className="text-[#E50914] text-2xl md:text-4xl font-extrabold tracking-wide drop-shadow-lg">
                    NETFLIX
                </h1>

                <div className="flex flex-wrap items-center gap-3 md:gap-5">

                    <button
                        className="bg-blue-600 hover:bg-red-700 px-3 md:px-4 py-1.5 md:py-2 rounded-md text-xs md:text-sm font-semibold transition"
                        onClick={handleGptSearchClick}
                    >
                        GPT
                    </button>

                    <p className="text-white text-xs md:text-sm drop-shadow-md hidden sm:block">
                        {user?.displayName || "User"}
                    </p>

                    <img
                        src={userlogo}
                        alt="user"
                        className="w-7 h-7 md:w-9 md:h-9 rounded-md"
                    />

                    <button
                        onClick={handleSignOut}
                        className="bg-red-600 hover:bg-red-700 px-3 md:px-4 py-1.5 md:py-2 rounded-md text-xs md:text-sm font-semibold transition"
                    >
                        Sign Out
                    </button>

                    {showGptSearch && (
                        <select
                            value={currentLang}
                            onChange={(e) => dispatch(changeLanguage(e.target.value))}
                            className="bg-black text-white border border-gray-600 rounded px-1 md:px-2 py-1 text-xs md:text-sm"
                        >
                            <option value="en">English</option>
                            <option value="hi">Hindi</option>
                            <option value="te">Telugu</option>
                        </select>
                    )}

                </div>

            </div>
        </div>
    );

};

export default Header;
