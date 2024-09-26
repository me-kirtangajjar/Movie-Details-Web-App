const router = require("express").Router();
const movieController = require("../controllers/movieController");

router.get("/", movieController.getHomePage);
router.post("/movie", movieController.getMovieDetails);

module.exports = router;
