const express = require("express");
const cors = require("cors");
const marketRoutes = require("./routes/marketRoutes");

require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/market", marketRoutes);

const PORT = process.env.PORT || 5000;

// create start function to connect to db later

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
