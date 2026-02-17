import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getTopRatedMovies = async () => {
            try {
                const response = await fetch("/api/top-rated");
                const data = await response.json();
                dispatch(addTopRatedMovies(data.results));
            } catch (error) {
                console.error("Failed to fetch top rated movies", error);
            }
        };

        getTopRatedMovies();
    }, [dispatch]);
};

export default useTopRatedMovies;
