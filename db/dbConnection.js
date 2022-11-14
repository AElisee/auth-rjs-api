const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Connected to MongoDB Atlas !"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));
