require("dotenv").config();
require('./models/smartdata');
const express = require('express');
const cors = require('cors');
var bodyParser = require("body-parser");
var app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('AT-Home connection #1 successful!'));

const administrators = require("./managers/validator")

app.post("/signup", function (req, res) {
  if (administrators.checkInputDataNULL(req, res)) return false;
  if (administrators.checkInputDataQuality(req, res)) return false;
  var dbFunctions = require("./models/connectSmarts");
  dbFunctions.createUser(req, res);
});

app.post("/login", function (req, res) {
  if (administrators.checkInputDataNULL(req, res)) return false;
  if (administrators.checkInputDataQuality(req, res)) return false;
  var dbFunctions = require("./models/connectSmarts");
  dbFunctions.loginUser(req, res);
});




var myObj = { firsname: "Nikolas", lastname: "Leon" };
console.log(myObj);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server1 is listening on port A ${PORT}`))
