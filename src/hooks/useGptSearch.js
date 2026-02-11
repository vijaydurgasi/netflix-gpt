import { useDispatch } from "react-redux";
import { addGptResults } from "../utils/GptSlice";
import { TMDB_API } from "../utils/constant";
// your TMDB headers

const useGptSearch = () => {

    const dispatch = useDispatch();

    const searchMoviesWithGPT = async (query) => {

        try {
            const GEMINI_KEY = process.env.REACT_APP_GEMINI_API_KEY;

            // 🔹 Step 1: Call Gemini
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        contents: [
                            {
                                parts: [
                                    {
                                        text: `Suggest 5 movies for: ${query}. 
                     Only return movie names separated by commas.`,
                                    },
                                ],
                            },
                        ],
                    }),
                }
            );

            const data = await response.json();

            const textResponse =
                data?.candidates?.[0]?.content?.parts?.[0]?.text;

            if (!textResponse) return;

            // 🔹 Step 2: Convert Gemini text to array
            const movieNames = textResponse.split(",");

            // 🔹 Step 3: Search TMDB for each movie
            const promiseArray = movieNames.map((movie) =>
                fetch(
                    `https://api.themoviedb.org/3/search/movie?query=${movie.trim()}`,
                    TMDB_API
                ).then((res) => res.json())
            );

            const tmdbResults = await Promise.all(promiseArray);

            const formattedResults = tmdbResults
                .map((movie) => movie.results[0])
                .filter(Boolean);
            console.log("formatted Results", formattedResults);


            // 🔹 Step 4: Dispatch to Redux
            dispatch(addGptResults(formattedResults));

        } catch (error) {
            console.error("GPT Search Error:", error);
        }
    };

    return searchMoviesWithGPT;
};

export default useGptSearch;
