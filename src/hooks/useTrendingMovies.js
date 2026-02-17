import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/movieSlice";
import { TRENDING_API } from "../utils/constant";

const useTrendingMovies = () => {
    const dispatch = useDispatch();



    useEffect(() => {
        const getMovies = async () => {
            const data = await fetch(TRENDING_API);
            const json = await data.json();
            dispatch(addTrendingMovies(json.results));
        };
        getMovies();
    }, [dispatch]);
};

export default useTrendingMovies;
