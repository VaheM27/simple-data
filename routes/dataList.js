const Data = require("../models/dataList");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const lists = await Data.find();
    res.send(lists);
  } catch (error) {
    res.send(error);
  }
});

router.post("/", async (req, res) => {
    try {
      const lists = await new Video(req.body).save();
      res.send(lists);
    } catch (error) {
      res.send(error);
    }
  });
  

module.exports = router;
