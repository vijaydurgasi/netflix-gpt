import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTrendingMovies } from "../utils/movieSlice";

const useTrendingMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getTrendingMovies = async () => {
            try {
                const response = await fetch("/api/trending");
                const data = await response.json();
                dispatch(addTrendingMovies(data.results));
            } catch (error) {
                console.error("Failed to fetch trending movies", error);
            }
        };

        getTrendingMovies();
    }, [dispatch]);
};

export default useTrendingMovies;
