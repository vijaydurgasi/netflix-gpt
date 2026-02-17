import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getNowPlayingMovies = async () => {
            try {
                const response = await fetch("/api/now-playing");
                const data = await response.json();
                console.log("NOW PLAYING DATA:", data);

                dispatch(addNowPlayingMovies(data.results));
            } catch (error) {
                console.error("Failed to fetch now playing movies", error);
            }
        };

        getNowPlayingMovies();
    }, [dispatch]);

};

export default useNowPlayingMovies;
