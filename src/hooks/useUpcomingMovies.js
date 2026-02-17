import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { UPCOMING_API } from "../utils/constant";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();



    useEffect(() => {
        const getMovies = async () => {
            const data = await fetch(UPCOMING_API);
            const json = await data.json();
            dispatch(addUpcomingMovies(json.results));
        };
        getMovies();
    }, [dispatch]);
};

export default useUpcomingMovies;
