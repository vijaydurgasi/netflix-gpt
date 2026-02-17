import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieid) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getMovieVideo = async () => {
            try {
                const response = await fetch(`/api/trailer?id=${movieid}`);
                const data = await response.json();

                const filterData = data.results?.filter(
                    (video) => video.type === "Trailer"
                );

                const trailer =
                    filterData?.length > 0 ? filterData[0] : data.results?.[0];

                dispatch(addTrailerVideo(trailer));
            } catch (error) {
                console.error("Failed to fetch trailer", error);
            }
        };

        if (movieid) {
            getMovieVideo();
        }
    }, [dispatch, movieid]);
};

export default useMovieTrailer;
