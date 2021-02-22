const pool = require('./admAndPopulate');
var password = require('password-hash-and-salt');
const jwt = require('jsonwebtoken');

var resultsNotFound = {
  "errorCode": "0",
  "errorMessage": "Operation not successful.",
  "rowCount": "0",
  "data": ""
};
var resultsFound = {
  "errorCode": "1",
  "errorMessage": "Operation successful.",
  "rowCount": "1",
  "data": ""
};

module.exports = {
  createUser: function (req, res) {
    pool.getConnection(function (err, connection) {
      if (err) throw err; // not connected!

      password(req.body.inputPassword).hash(function (error, hash) {
        var sql = "INSERT INTO userupdated SET ?";
        var values = {
          email: req.body.inputEmail,
          password: hash,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        // Use the connection
        connection.query(sql, values, function (error, results, fields) {
          if (error) {
            console.log(error);
            resultsNotFound["errorMessage"] = "this email id already exists.";
            return res.send(resultsNotFound);
          } else return res.send(resultsFound);
        });
        connection.release(); // Handle error after the release.
        if (error) throw error; // No pool
      });
    });
  },


  loginUser: function (req, res) {
    pool.getConnection(function (err, connection) {
      if (err) throw err; // not connected!

      var sql = "SELECT * FROM `userupdated` WHERE `email` = ?";
      var values = [req.body.inputEmail];
      // Use the connection
      connection.query(sql, values, function (error, results, fields) {
        if (error) {
          resultsNotFound["errorMessage"] =
            "Something went wrong with Server.";
          return res.send(resultsNotFound);
        }
        if (results == "") {
          resultsNotFound["errorMessage"] = "User Id not found.";
          return res.send(resultsNotFound);
        }
        password(req.body.inputPassword).verifyAgainst(
          results[0].password,
          function (error, verified) {
            if (verified == true) {
              var token = {
                token: jwt.sign(
                  { email: req.body.inputEmail },
                  process.env.JWT_SECRET,
                  { expiresIn: "30d" }
                ),
              };
              resultsFound["data"] = token;
              res.send(resultsFound);
            } else {
              resultsNotFound["errorMessage"] = "password don't match";
              return res.send(resultsNotFound);
            }
          }
        );

        connection.release();
        if (error) throw error;
      });
    });
  },

  getUser: function (input, res) {
    pool.getConnection(function (err, connection) {
      if (err) throw err; // not connected!

      var sql = "SELECT * FROM `userupdated` WHERE `email` = ?";
      var values = [input];
      // Use the connection
      connection.query(sql, values, function (error, results, fields) {
        if (error) {
          resultsNotFound["errorMessage"] =
            "Something went wrong with Server.";
          return res.send(resultsNotFound);
        }
        if (results == "") {
          resultsNotFound["errorMessage"] = "User Id not found.";
          return res.send(resultsNotFound);
        }
        resultsFound["data"] = results[0];
        res.send(resultsFound);

        connection.release();
        if (error) throw error;
      });
    });
  },
};