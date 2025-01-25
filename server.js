const express = require("express");

require("dotenv").config();

const app = express();

app.listen(process.env.PORT, () => {
  console.log("deneme tammalndı");
});

app.get("/", (req, res) => {
  res.json({ name: "yılmaz", surname: "keskin" });
});
