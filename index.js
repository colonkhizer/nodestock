const express = require("express");
const path = require("path");
var exphbs = require("express-handlebars");
const app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
  res.render("home", {
    stuff: "This is stuff"
  });
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
  console.log("Node Working");
});
