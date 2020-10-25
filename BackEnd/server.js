require("dotenv").config();
const express = require('express');
const cors = require('cors');
var bodyParser = require("body-parser");
var app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('connection successful!'));

const validator = require("./validators/validator");
//////////////////////////////////////////////// REGISTER
app.post("/signup", function (req, res) {    
  if (validator.checkInputDataNULL(req, res)) return false;
  if (validator.checkInputDataQuality(req, res)) return false;

  var dbFunctions = require("./models/DB_connector");
  dbFunctions.createUser(req, res);
});

///////////////////////////////////////////////// ACCESS
app.post("/login", function (req, res) {


  if (validator.checkInputDataNULL(req, res)) return false;
  if (validator.checkInputDataQuality(req, res)) return false;


  var dbFunctions = require("./models/DB_connector");
  dbFunctions.loginUser(req, res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))