const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the world of K8s!!!!");
});

app.listen(8080);
console.log("Running on port 8080");
