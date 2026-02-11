import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { POPULAR_API } from "../utils/constant";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getMovies = async () => {
        const data = await fetch(POPULAR_API);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    };

    useEffect(() => {
        getMovies();
    }, []);
};

export default usePopularMovies;
