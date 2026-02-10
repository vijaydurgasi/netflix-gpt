import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { NOW_PLAYING_API } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";


const useNowPlayingMovies = () => {


    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch(NOW_PLAYING_API);
        const json = await data.json();
        console.log("movies  list", json);
        dispatch(addNowPlayingMovies(json.results));
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, [])
};

export default useNowPlayingMovies;