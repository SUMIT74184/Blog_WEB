const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// Routes
const blog = require("./Routes/blog");
app.use("/api/v1", blog);

// Database connection
const dbConnect = require("./config/database");
dbConnect();

// Routes
app.get("/", (req, res) => {
  res.send(`<h1>This is the BLOGS homepage</h1>`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started successfully on port ${PORT}`);
});
