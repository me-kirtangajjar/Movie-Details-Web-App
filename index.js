const express = require("express");
const path = require("path");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Routes
app.use("/", require("./routes/route"));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  return res.status(500).render("error", { error: "Something went wrong!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.info(`Server is running on port ${PORT}`);
});
