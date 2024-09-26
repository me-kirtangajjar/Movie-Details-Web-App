const movieService = require("../services/movieService");

exports.getHomePage = (req, res) => {
  return res.render("home", { movie: null, error: null });
};

exports.getMovieDetails = async (req, res) => {
  try {
    const { movieName } = req.body;

    if (!movieName || movieName.trim() === "") {
      return res.render("home", {
        movie: null,
        error: "Please enter a movie name",
      });
    }

    const movie = await movieService.fetchMovieDetails(movieName);

    if (!movie) {
      return res.render("home", { movie: null, error: "Movie not found" });
    }

    return res.render("home", { movie, error: null });
  } catch (error) {
    console.error(error);
    return res.status(500).render("home", {
      movie: null,
      error: "Something went wrong, please try again later",
    });
  }
};
