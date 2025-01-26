const express = require("express");
const notRoute = require("./routers/notes");

require("dotenv").config();

const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.listen(process.env.PORT, () => {
  console.log("deneme tammalndı");
});

app.use(notRoute);

app.use(express.json());
