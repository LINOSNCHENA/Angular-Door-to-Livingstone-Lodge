require("dotenv").config();
require('./models/bookings');
require('./models/workers');
require('./models/employees');
const express = require('express');
const cors = require('cors');
var bodyParser = require("body-parser");
var app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('connection successful!'));

const administrators=require("./admins/validator")

//////////////////////////////////////////////// REGISTER
app.post("/signup", function (req, res) {    
  if (administrators.checkInputDataNULL(req, res)) return false;
  if (administrators.checkInputDataQuality(req, res)) return false;
  var dbFunctions = require("./models/DB_connector");
  dbFunctions.createUser(req, res);
});

app.post("/login", function (req, res) {
  if (administrators.checkInputDataNULL(req, res)) return false;
  if (administrators.checkInputDataQuality(req, res)) return false;
  var dbFunctions = require("./models/DB_connector");
  dbFunctions.loginUser(req, res);
});

///////////////////////////////////////////////// ACCESS

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server1 is listening on port A ${PORT}`))
