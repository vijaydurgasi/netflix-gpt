import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { NOW_PLAYING_API } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const getNowPlayingMovies = async () => {
            const data = await fetch(NOW_PLAYING_API);
            const json = await data.json();
            dispatch(addNowPlayingMovies(json.results));
        };

        getNowPlayingMovies();
    }, [dispatch]);

};

export default useNowPlayingMovies;
