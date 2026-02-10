import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { addTrailerVideo } from "../utils/movieSlice";
import { VIDEO_TRAILER_API } from "../utils/constant";

const useMovieTrailer = () => {

    const dispatch = useDispatch();

    const getMovieVideo = async () => {
        const movieid = 840464;
        const data = await fetch(VIDEO_TRAILER_API(movieid));
        const json = await data.json();
        console.log("Video trailer", json);

        const filterData = json.results.filter((video) => video.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0];
        console.log("Trailer", trailer);
        dispatch(addTrailerVideo(trailer));

    };

    useEffect(() => {
        getMovieVideo();
    }, []);

}

export default useMovieTrailer