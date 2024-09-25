const router = require("express").Router();
const axios = require("axios");

router.get("/", (req, res) => {
  return res.render("home", { movie: null });
});

router.post("/movie", async (req, res) => {
  try {
    const { movieName } = req.body;

    const response = await axios.get(
      `http://www.omdbapi.com/?t=${movieName}&apikey=b8f8ec5a`
    );

    return res.render("home", { movie: response.data });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ error: "Something went wrong, Try again later" });
  }
});

module.exports = router;
