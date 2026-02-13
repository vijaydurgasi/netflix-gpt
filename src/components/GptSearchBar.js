import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import languageConstants from "../utils/languageConstants";
import { addGptResults } from "../utils/gptSlice";
import mockMovies from "../utils/mockMovies";

const GptSearchBar = () => {
    const [query, setQuery] = useState("");

    const [debouncedQuery, setDebouncedQuery] = useState("");

    const [hasSearched, setHasSearched] = useState(false);

    const dispatch = useDispatch();

    const lang = useSelector((store) => store.language.lang);
    const text = languageConstants[lang];

    const gptResults = useSelector((store) => store.gpt.gptResults);

    const {
        popularMovies,
        nowPlayingMovies,
        topRatedMovies,
        upcomingMovies,
        trendingMovies,
    } = useSelector((store) => store.movies);

    const genreMap = {
        28: "action",
        27: "horror",
        35: "comedy",
        18: "drama",
        878: "sci-fi",
        53: "thriller",
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(query.trim().toLowerCase());
        }, 400);

        return () => clearTimeout(timer);
    }, [query]);

    const performSearch = (search) => {
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
            const titleMatch = movie.title
                ?.toLowerCase()
                .includes(search);

            const mockGenreMatch = movie.genre
                ?.toLowerCase()
                .includes(search);

            const apiGenreMatch = movie.genre_ids?.some(
                (id) => genreMap[id]?.includes(search)
            );

            return titleMatch || mockGenreMatch || apiGenreMatch;
        });

        dispatch(addGptResults(filteredMovies));
    };

    const handleSearchClick = () => {
        if (!debouncedQuery) return;

        setHasSearched(true);
        performSearch(debouncedQuery);
    };

    return (
        <div className=" flex flex-col items-center px-4 pt-24 pb-24">
            <div className=" w-full max-w-3xl bg-zinc-900 border border-zinc-700 rounded-2xl p-6 shadow-2xl">
                <h2 className="text-2xl font-semibold text-white mb-4">
                    {text.aiTitle}
                </h2>

                <div className="flex gap-4">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setHasSearched(false);
                        }}
                        placeholder={text.searchPlaceholder}
                        className="flex-1 bg-zinc-800 text-white px-5 py-4 rounded-lg outline-none focus:ring-2 focus:ring-red-600 transition"
                    />

                    <button
                        onClick={handleSearchClick}
                        className="bg-red-600 hover:bg-red-700 active:bg-red-800 transition px-6 py-4 text-white font-semibold rounded-lg"
                    >
                        {text.searchButton}
                    </button>
                </div>
            </div>

            {hasSearched && gptResults && (
                <div className="mt-10 w-full max-w-3xl bg-zinc-900 border border-zinc-700 rounded-2xl p-6 shadow-xl">
                    <div className="text-sm text-zinc-400 mb-6">
                        ChatGPT
                    </div>

                    {gptResults.length === 0 ? (
                        <p className="text-zinc-400">
                            {text.noResults(query)}
                        </p>
                    ) : (
                        <>
                            <p className="text-white mb-6">
                                {text.gptIntro(query)}
                            </p>

                            {gptResults.map((movie) => (
                                <div key={movie.id} className="mb-8">
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        🎬 {movie.title}
                                    </h3>

                                    <p className="text-zinc-400 leading-relaxed">
                                        {movie.overview ||
                                            "No description available."}
                                    </p>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default GptSearchBar;
