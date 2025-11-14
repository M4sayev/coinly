const express = require("express");
const cors = require("cors");
const marketRoutes = require("./routes/marketRoutes");

const rateLimit = require("express-rate-limit");

const marketlimit = rateLimit({
  windowMs: 30 * 1000,
  max: 50,
  message: {
    success: false,
    message: "Too many requests, try again later...",
  },
});

require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/market", [marketlimit, marketRoutes]);

const PORT = process.env.PORT || 5000;

// create start function to connect to db later

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
