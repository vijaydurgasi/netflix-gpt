import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieid) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!movieid) return;

        const getMovieVideo = async () => {
            const response = await fetch(`/api/trailer?id=${movieid}`);
            const data = await response.json();
            console.log("TRAILER DATA:", data);
            const filterData = data.results?.filter(
                (video) => video.type === "Trailer"
            );

            const trailer =
                filterData?.length > 0 ? filterData[0] : data.results?.[0];

            dispatch(addTrailerVideo(trailer));
        };

        getMovieVideo();
    }, [dispatch, movieid]);

};

export default useMovieTrailer;
