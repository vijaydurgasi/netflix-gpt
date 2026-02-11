import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { TOP_RATED_API } from "../utils/constant";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const getMovies = async () => {
        const data = await fetch(TOP_RATED_API);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    };

    useEffect(() => {
        getMovies();
    }, []);
};

export default useTopRatedMovies;
