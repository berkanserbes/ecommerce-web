require("dotenv").config();

const express = require("express");
const app = express();

const connectDB = require("./configs/db");
const { registerRoute, loginRoute } = require("./routes");

app.use(express.json());

app.use("/api/authentication", registerRoute);

const PORT = process.env.PORT || 4000;

const connectDatabase = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Connected to database");
  } catch (err) {
    console.log(err.message);
  }
};

connectDatabase();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
