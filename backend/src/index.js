require("dotenv").config();

const express = require("express");
const app = express();

const connectDB = require("./configs/db");

const PORT = process.env.PORT || 4000;

const connectDatabase = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
  } catch (err) {
    console.log(err.message);
  }
};

connectDatabase();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
