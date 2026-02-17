export default async function handler(req, res) {
    try {
        const response = await fetch(
            "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
            {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: "Bearer " + process.env.REACT_APP_TOKEN,
                },
            }
        );

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch now playing movies" });
    }
}
