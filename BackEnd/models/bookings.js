require('./connect1');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors({ origin: "*" }));

connection.connect(function (err) {
    if (err) throw err;
    console.log('You are connected on SERVER B');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
////////////////////////////// BOOKINGS
app.post('/binsertData', function (req, res) {
    let fname = req.body.fname;
    let lname = req.body.lname;
    let email = req.body.email;
    let password = req.body.password;
    let mobile = req.body.mobile;
    let gender = req.body.gender;
    connection.query("INSERT INTO `bookings`( `fname`, `lname`, `email`, `password`, `mobile`, `gender`) VALUES('" + fname + "','" + lname + "','" + email + "','" + password + "','" + mobile + "','" + gender + "')", function (err, results) {
        if (err) throw err;
        res.send({ "msg": "Successfully Inserted" });
    });
});

app.get('/bgetdata', function (req, res) {
    connection.query('SELECT * FROM `bookings`', function (err, results) {
        if (err) throw err;
        res.send(results);
    });
});


app.get('/beditData/:id', function (req, res) {
    let id = req.params.id;
    connection.query("select *  FROM `bookings` where id =" + id, function (err, results) {
        if (err) throw err;
        res.send(results);
    });

});

app.post('/bupdateData/:id', function (req, res) {
    let id = req.body.id;
    let fname = req.body.fname;
    let lname = req.body.lname;
    let email = req.body.email;
    let password = req.body.password;
    let mobile = req.body.mobile;
    let gender = req.body.gender;
    connection.query("UPDATE `bookings` SET `fname`= '" + fname + "', `lname` = '" + lname + "',`email` ='" + password + "',mobile='" + mobile + "',gender='" + gender + "'  where `id`= " + id, function (err, results) {
        if (err) throw err;
        res.send({ "msg": "Successfully Updated" });
    });
});

app.get('/bdeletedata/:id', function (req, res) {
    let id = req.params.id;
    connection.query("Delete  FROM `bookings` where id =" + id, function (err, results) {
        if (err) throw err;
        res.send(results);
    });
});
/////////////////////////////////////////////////////////////// EMPLOYEES
app.post('/einsertData', function (req, res) {
    let fname = req.body.fname;
    let lname = req.body.lname;
    let email = req.body.email;
    let password = req.body.password;
    let mobile = req.body.mobile;
    let gender = req.body.gender;
    connection.query("INSERT INTO `employees`( `fname`, `lname`, `email`, `password`, `mobile`, `gender`) VALUES('" + fname + "','" + lname + "','" + email + "','" + password + "','" + mobile + "','" + gender + "')", function (err, results) {
        if (err) throw err;
        res.send({ "msg": "Successfully Inserted" });
    });
});

app.get('/egetdata', function (req, res) {
    connection.query('SELECT * FROM `employees`', function (err, results) {
        if (err) throw err;
        res.send(results);
    });
});


app.get('/eeditData/:id', function (req, res) {
    let id = req.params.id;
    connection.query("select *  FROM `employees` where id =" + id, function (err, results) {
        if (err) throw err;
        res.send(results);
    });

});

app.post('/eupdateData/:id', function (req, res) {
    let id = req.body.id;
    let fname = req.body.fname;
    let lname = req.body.lname;
    let email = req.body.email;
    let password = req.body.password;
    let mobile = req.body.mobile;
    let gender = req.body.gender;
    connection.query("UPDATE `employees` SET `fname`= '" + fname + "', `lname` = '" + lname + "',`email` ='" + password + "',mobile='" + mobile + "',gender='" + gender + "'  where `id`= " + id, function (err, results) {
        if (err) throw err;
        res.send({ "msg": "Successfully Updated" });
    });
});

app.get('/edeletedata/:id', function (req, res) {
    let id = req.params.id;
    connection.query("Delete  FROM `employees` where id =" + id, function (err, results) {
        if (err) throw err;
        res.send(results);
    });
});
///////////////////////////////////////////////////////////// WORKERS

app.post('/winsertData', function (req, res) {
    let fname = req.body.fname;
    let lname = req.body.lname;
    let email = req.body.email;
    let password = req.body.password;
    let mobile = req.body.mobile;
    let gender = req.body.gender;
    connection.query("INSERT INTO `workers`( `fname`, `lname`, `email`, `password`, `mobile`, `gender`) VALUES('" + fname + "','" + lname + "','" + email + "','" + password + "','" + mobile + "','" + gender + "')", function (err, results) {
        if (err) throw err;
        res.send({ "msg": "Successfully Inserted" });
    });
});

app.get('/wgetdata', function (req, res) {
    connection.query('SELECT * FROM `workers`', function (err, results) {
        if (err) throw err;
        res.send(results);
    });
});


app.get('/weditData/:id', function (req, res) {
    let id = req.params.id;
    connection.query("select *  FROM `workers` where id =" + id, function (err, results) {
        if (err) throw err;
        res.send(results);
    });

});

app.post('/wupdateData/:id', function (req, res) {
    let id = req.body.id;
    let fname = req.body.fname;
    let lname = req.body.lname;
    let email = req.body.email;
    let password = req.body.password;
    let mobile = req.body.mobile;
    let gender = req.body.gender;
    connection.query("UPDATE `workers` SET `fname`= '" + fname + "', `lname` = '" + lname + "',`email` ='" + password + "',mobile='" + mobile + "',gender='" + gender + "'  where `id`= " + id, function (err, results) {
        if (err) throw err;
        res.send({ "msg": "Successfully Updated" });
    });
});

app.get('/wdeletedata/:id', function (req, res) {
    let id = req.params.id;
    connection.query("Delete  FROM `workers` where id =" + id, function (err, results) {
        if (err) throw err;
        res.send(results);
    });
});


const PORT1 = process.env.PORT1 || 4210;
// app.listen(PORT2, function (req, res) {
//     console.log('Port Listing to 4210');
// });
app.listen(PORT1, () => console.log(`Server2 is listening on port B ${PORT1}`))
