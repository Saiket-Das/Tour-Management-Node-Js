require("dotenv").config();

const express = require("express");
const cors = require("cors");
const colors = require("colors");

const connectDB = require("./backend/confiq/database");

const port = process.env.PORT || 5000;
const app = express();

connectDB();

// dbTour
// bPRbASdIHpxblzfN

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("ACC - Assignment 2 is running!");
});

const server = app.listen(
  port,
  console.log(`Server running on PORT ${port}...`.yellow.bold)
);
