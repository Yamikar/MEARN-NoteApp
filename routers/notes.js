const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    Contry: "trabzon",
    Age: "22",
  });
});

module.exports = router;
