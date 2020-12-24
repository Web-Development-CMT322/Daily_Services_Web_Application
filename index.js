//Start server
const bodyParser = require("body-parser");
const ejs = require("ejs");
const express = require("express");
const app = express();
const https = require("https");
const port = 8000;

app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
