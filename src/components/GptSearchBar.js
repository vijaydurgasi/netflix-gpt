import { useSelector } from "react-redux";
import languageConstants from "../utils/languageConstants";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addGptResults } from "../utils/gptSlice";
import mockMovies from "../utils/mockMovies";



const GptSearchBar = () => {

    const [query, setQuery] = useState("");

    const lang = useSelector(store => store.language.lang);

    const text = languageConstants[lang];

    const dispatch = useDispatch();
    const gptResults = useSelector(store => store.gpt.gptResults);

    // console.log("Redux value:", gptResults);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query.trim()) return;

        const filteredMovies = mockMovies.filter((movie) => movie.genre.toLowerCase().includes(query.toLowerCase()) ||
            movie.title.toLowerCase().includes(query.toLowerCase()));
        console.log("filtered Movies", filteredMovies);

        if (filteredMovies.length === 0) {
            dispatch(
                addGptResults(
                    `I couldn't find movies related to "${query}". Try another genre or title.`
                )
            );
            return;
        }
        const responseText = `Based on your interest in "${query}", here are some movies you might enjoy:\n\n${filteredMovies
            .map((movie) => "• " + movie.title)
            .join("\n")}`;

        console.log("response Movies = ", responseText);

        dispatch(addGptResults(responseText));

    };

    return (
        <div className="flex flex-col items-center px-4 pt-24">

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-3xl bg-zinc-900 border border-zinc-700 rounded-2xl p-6 shadow-2xl"
            >

                <h2 className="text-2xl font-semibold text-white mb-4">
                    {text.aiTitle}
                </h2>

                <div className="flex gap-4">

                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder={text.searchPlaceholder}
                        className="flex-1 bg-zinc-800 text-white px-5 py-4 rounded-lg outline-none focus:ring-2 focus:ring-red-600 transition"
                    />

                    <button
                        type="submit"

                        className="
                            bg-red-600 hover:bg-red-700 active:bg-red-800 active:scale-95 transition
                            duration-150 ease-in-out px-6 py-4 text-white font-semibold rounded-lg shadow-lg active:shadow-inner disabled:opacity-50
                        "
                    >
                        {text.searchButton}
                    </button>

                </div>
            </form>
            {gptResults && (
                <div className="mt-6 w-full max-w-3xl bg-zinc-800 p-6 rounded-xl text-white whitespace-pre-line">
                    {gptResults}
                </div>
            )}



        </div>
    );
};

export default GptSearchBar;
