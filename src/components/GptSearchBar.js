import { useSelector } from "react-redux";
import languageConstants from "../utils/languageConstants";

const GptSearchBar = () => {

    const lang = useSelector(store => store.language.lang);
    const text = languageConstants[lang];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="flex justify-center items-center min-h-[60vh] px-4">

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
                        placeholder={text.searchPlaceholder}
                        className="flex-1 bg-zinc-800 text-white px-5 py-4 rounded-lg outline-none focus:ring-2 focus:ring-red-600 transition"
                    />

                    <button
                        type="submit"
                        className="
                            bg-red-600 hover:bg-red-700 active:bg-red-800 active:scale-95 transition
                            duration-150 ease-in-out px-6 py-4 text-white font-semibold rounded-lg shadow-lg active:shadow-inner"
                    >
                        {text.searchButton}
                    </button>

                </div>

            </form>

        </div>
    );
};

export default GptSearchBar;
