const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware
app.use(express.json());

const blog = require("./Routes/blog");
//mount
app.use("/api/v1", blog);

const dbConnect = require("./config/databsae");
dbConnect();

//start the server

app.listen(PORT, () => {
  console.log("Server started successfully");
});

app.get("/", (req, res) => {
  res.send(`<h1>This is  BLOGS homepage</h1>`);
});
