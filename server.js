const express = require("express");
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const drinks = require(__dirname + "/models/drinks.js")
const foods = require(__dirname + "/models/foods.js")

//basic ejs setup with express
const app = express();
app.set("view engine", "ejs");

// to access public dir such as css
app.use(express.static("public"));

app.get("/", function (req, res) {
 res.send("😀 Welcome to GitPub");
});

//drinks
app.get("/drinks", function (req, res) {
  res.render("index",{list:drinks,title:"drinks"});
});

// setup dynamic route for each drinks
app.get ("/drinks/:id", function (req, res){
 res.render("show",{item:drinks[req.params.id]});
});

app.get("/foods", function (req, res) {
  res.render("index",{list:foods,title:"foods"});
});

app.get ("/foods/:id", function (req, res){
 res.render("show",{item:foods[req.params.id]});
});


app.listen(port, function(){
  console.log("Server started on port 5000.");
});