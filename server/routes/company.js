const express = require("express");
const router = express.Router();
const { Company } = require("../mongoose/model");

router.post("/company/create", async (req, res) => {
  const { name } = req.body;
  try {
    const newCompeny = await Company({ name }).save();
    console.log(newCompeny._id);
    res.send(newCompeny._id ? true : false);
  } catch (error) {
    res.send(false);
  }
});

router.get("/company/list/famous", async (req, res) => {
  const company = await Company.find().limit(10).sort({ realtimeScore: -1 });
  res.send(company);
});

module.exports = router;
