const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.redirect("/index.html");
});

app.get("*", (req, res) => {
  res.redirect("/index.html");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
