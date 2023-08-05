const express = require("express");
const port = 3000;
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
      useCreateIndex: true,
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

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use(express.json());
app.use(cors());
app.use("/api/dataList", data_url);

const PORT = process.env.PORT || 8080;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
});
