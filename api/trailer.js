export default async function handler(req, res) {
    const { id } = req.query;

    if (!id) {
        return res.status(400).json({ error: "Movie ID is required" });
    }

    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/videos`,
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
        res.status(500).json({ error: "Failed to fetch trailer" });
    }
}
