import { useSelector, useDispatch } from "react-redux";
import languageConstants from "../utils/languageConstants";
import { useState } from "react";
import { addGptResults } from "../utils/gptSlice";
import mockMovies from "../utils/mockMovies";

const GptSearchBar = () => {
    const [query, setQuery] = useState("");

    const dispatch = useDispatch();

    const lang = useSelector((store) => store.language.lang);
    const text = languageConstants[lang];

    const gptResults = useSelector((store) => store.gpt.gptResults);

    // 🔥 Get ALL movie categories from store
    const {
        popularMovies,
        nowPlayingMovies,
        topRatedMovies,
        upcomingMovies,
        trendingMovies,
    } = useSelector((store) => store.movies);

    const genreMap = {
        28: "action",
        12: "adventure",
        16: "animation",
        35: "comedy",
        80: "crime",
        99: "documentary",
        18: "drama",
        10751: "family",
        14: "fantasy",
        36: "history",
        27: "horror",
        10402: "music",
        9648: "mystery",
        10749: "romance",
        878: "sci-fi",
        53: "thriller",
        10752: "war",
        37: "western",
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!query.trim()) return;

        const allMovies = [
            ...(popularMovies || []),
            ...(nowPlayingMovies || []),
            ...(topRatedMovies || []),
            ...(upcomingMovies || []),
            ...(trendingMovies || []),
            ...mockMovies,
        ];


        const uniqueMovies = Array.from(
            new Map(allMovies.map((movie) => [movie.id, movie])).values()
        );

        const filteredMovies = uniqueMovies.filter((movie) => {
            const search = query.toLowerCase();

            const titleMatch = movie.title?.toLowerCase().includes(search);

            const mockGenreMatch = movie.genre?.toLowerCase().includes(search);

            const apiGenreMatch = movie.genre_ids?.some(
                (id) => genreMap[id]?.includes(search)
            );

            return titleMatch || mockGenreMatch || apiGenreMatch;

        });

        if (filteredMovies.length === 0) {
            dispatch(
                addGptResults(
                    `I couldn't find movies related to "${query}". Try another title.`
                )
            );
            return;
        }
        console.log("Movie filtered list", filteredMovies);

        const responseText = `Here are some movies related to "${query}" that you might like:\n\n${filteredMovies
            .map((movie, index) =>
                `${index + 1}. ${movie.title}\n   ${movie.overview || "No description available."}\n`
            )
            .join("\n")}`;


        dispatch(addGptResults(responseText));
    };

    return (
        <div className="flex flex-col items-center px-4 pt-24 pb-24">
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
                        className="bg-red-600 hover:bg-red-700 active:bg-red-800 active:scale-95 transition duration-150 ease-in-out px-6 py-4 text-white font-semibold rounded-lg shadow-lg"
                    >
                        {text.searchButton}
                    </button>
                </div>
            </form>

            {gptResults && (
                <div className="mt-10 w-full max-w-3xl bg-zinc-900 border border-zinc-700 rounded-2xl p-6 shadow-xl">
                    <div className="text-sm text-zinc-400 mb-2">
                        ChatGPT
                    </div>

                    <div className="text-white whitespace-pre-line leading-relaxed">
                        {gptResults}
                    </div>
                </div>
            )}

        </div>
    );
};

export default GptSearchBar;
