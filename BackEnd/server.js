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

///////////////////////////////////////////////// PRODUCTS

var router = express.Router();

var model = require('./models/product-model');

router.get('/:offset/:limit', function(req, res, next) {
  let offset = req.params.offset;
  let limit = req.params.limit;
  model.getProducts(offset, limit, function(err, products) {
    if(err) {
      res.json(err)
    } else {
      model.getTotalProducts(function(err, result) {
        if (err) {
          res.json(err)
        } else {
          res.json({data: products, total: result[0].total})
        }
      })
    }
  })
});

router.get('/:id', function(req, res) {
  let id = req.params.id;
  model.getProduct(id, function(err, result){
    res.json({data: result[0], error: err})
  })
})

router.post('/add', function(req, res) {
  model.addProduct(req.body, function(err, result) {
    res.json({data: result, error: err})
  })
})

router.put('/update', function(req, res) {
  model.updateProduct(req.body, function(err, result) {
    res.json({data: result, error: err})
  })
})

router.delete('/delete/:id', function(req, res) {
  let id = req.params.id;
  model.deleteProduct(id, function(err, result) {
    res.json({data: result, error: err})
  })
})

module.exports = router;
///////////////////////////////////////////////// PRODUCTS

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is listening on port A ${PORT}`))

const PORT1 = process.env.PORT || 2000;
// app.listen(PORT1, () => console.log(`Server is listening on port B ${PORT1}`))
// app.listen(PORT, () => console.log(`Server is listening on port C ${PORT}`))
