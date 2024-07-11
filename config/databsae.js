const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {})
    .then(console.log("db connected successfully"))
    .catch((error) => {
      console.log("db is facing an issues to connect");
      console.log(error);
      process.exit(1);
    });
};
module.exports = dbConnect;
