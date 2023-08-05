require("dotenv").config();
const data_url = require("./routes/dataList");
const cors = require("cors");
const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
    //   useCreateIndex: true,
      useUnifiedTopology: true,
    };
    const conn = await mongoose.connect(
      process.env.MONGO_URI,
      connectionParams
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

app.all("*", function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => res.send("Welcome to our API service"));
app.use("/api/data", data_url);

const PORT = process.env.PORT || 8080;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
});
