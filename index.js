const express = require("express");
const ejs = require("ejs");
const app = express();
// app.get("/", (req, res) => {
//   res.json({
//     msg: "Success",
//   });
// });
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
app.listen(3000);
