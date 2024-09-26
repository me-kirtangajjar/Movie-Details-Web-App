const axios = require("axios");

exports.fetchMovieDetails = async (movieName) => {
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${
        process.env.OMDB_API_KEY
      }`
    );

    if (response.data.Response === "False") {
      return null;
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw new Error("Failed to fetch movie details");
  }
};
