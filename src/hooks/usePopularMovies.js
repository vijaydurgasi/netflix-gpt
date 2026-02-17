import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { POPULAR_API } from "../utils/constant";

const usePopularMovies = () => {
    const dispatch = useDispatch();



    useEffect(() => {
        const getMovies = async () => {
            const data = await fetch(POPULAR_API);
            const json = await data.json();
            dispatch(addPopularMovies(json.results));
        };
        getMovies();
    }, [dispatch]);
};

export default usePopularMovies;
