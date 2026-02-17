import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getUpcomingMovies = async () => {
            try {
                const response = await fetch("/api/upcoming");
                const data = await response.json();
                dispatch(addUpcomingMovies(data.results));
            } catch (error) {
                console.error("Failed to fetch upcoming movies", error);
            }
        };

        getUpcomingMovies();
    }, [dispatch]);
};

export default useUpcomingMovies;
