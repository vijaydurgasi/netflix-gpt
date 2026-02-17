import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getPopularMovies = async () => {
            try {
                const response = await fetch("/api/popular");
                const data = await response.json();
                dispatch(addPopularMovies(data.results));
            } catch (error) {
                console.error("Failed to fetch popular movies", error);
            }
        };

        getPopularMovies();
    }, [dispatch]);
};

export default usePopularMovies;
