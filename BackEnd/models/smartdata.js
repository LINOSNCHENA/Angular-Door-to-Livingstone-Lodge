 require('./connectsAdmin');
require('./administrators');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors({ origin: "*" }));

connection.connect(function (err) {
    if (err) throw err;
    console.log('You are connected on (SECOND) SERVER B');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//////////////////////////////////////////////////////////////////////// 1. BOOKINGS
app.post('/binsertData', function (req, res) {
    let name = req.body.name;
    let town = req.body.town;
    let hotel = req.body.hotel;
    let isactive = req.body.isactive;
    let createdat = new Date().toISOString().substring(0, 19).replace('T', ' ');
    connection.query("INSERT INTO `bookings`( `name`, `town`, `hotel`, `isactive`, `createdat`) VALUES('" + name
        + "','" + town + "','" + hotel + "','" + isactive + "','" + createdat + "')", function (err, results) {
            if (err) throw err;
            res.send({ "msg": "Successfully Inserted Booking" });
            console.log({ "msg": "Successfully Inserted Booking" });
        });
});

app.get('/bgetdata', function (req, res) {
    connection.query('SELECT * FROM `bookings`', function (err, results) {
        if (err) throw err;
        res.send(results);
        console.log({ "msg": "Successfully many Selected Booking!" });
    });
});


app.get('/beditData/:id', function (req, res) {
    let id = req.params.id;
    connection.query("select *  FROM `bookings` where id =" + id, function (err, results) {
        if (err) throw err;
        res.send(results);
        console.log({ "msg": "Successfully Identified Booking!" });
    });

});

app.post('/bupdateData/:id', function (req, res) {
    let id = req.body.id;
    let name = req.body.name;
    let town = req.body.town;
    let hotel = req.body.hotel;
    let isactive = req.body.isactive;
    let createdat = new Date().toISOString().substring(0, 19).replace('T', ' ');
    connection.query("UPDATE `bookings` SET `name`= '" + name + "', `town` ='" + town + "',`hotel` ='" + hotel
        + "',isactive='" + isactive + "',createdat='" + createdat + "'  where `id`= " + id, function (err, results) {
            if (err) throw err; if (err) throw err;
            res.send({ "msg": "Successfully Updated Booking" });
            console.log({ "msg": "Successfully Updated Booking!" });
        });
});

app.get('/bdeletedata/:id', function (req, res) {
    let id = req.params.id;
    connection.query("Delete  FROM `bookings` where id =" + id, function (err, results) {
        if (err) throw err;
        res.send(results);
        console.log({ "msg": "Successfully Deleted Booking!" });
    });
});
/////////////////////////////////////////////////////////////////////////////// 2.EMPLOYEES
app.post('/einsertData', function (req, res) {
    let name = req.body.name;
    let office = req.body.office;
    let email = req.body.email;
    let mobile = req.body.mobile;
    let createdat = new Date().toISOString().substring(0, 19).replace('T', ' ');
    connection.query("INSERT INTO `employees`( `name`, `mobile`, `office`, `email`, `createdat`) VALUES('" + name
        + "','" + mobile + "','" + office + "','" + email + "','" + createdat + "')", function (err, results) {

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
    let name = req.body.name;
    let mobile = req.body.mobile;
    let office = req.body.office;
    let email = req.body.email;
    let createdat = new Date().toISOString().substring(0, 19).replace('T', ' ');
    connection.query("UPDATE `employees` SET `name`= '" + name + "', `mobile` = '" + mobile + "',`office` ='" + office
        + "',email='" + email + "',createdat='" + createdat + "'  where `id`= " + id, function (err, results) {
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
////////////////////////////////////////////////////////////////////////////////// 3. WORKERS

app.post('/winsertData', function (req, res) {
    let name = req.body.name;
    let department = req.body.department;
    let salary = req.body.salary;
    let isactive = req.body.isactive;
    let createdat = new Date().toISOString().substring(0, 19).replace('T', ' ');
    connection.query("INSERT INTO `workers`( `name`, `department`, `salary`, `isactive`, `createdat`) VALUES('" + name
        + "','" + department + "','" + salary + "','" + isactive + "','" + createdat + "')", function (err, results) {
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
    let name = req.body.name;
    let department = req.body.department;
    let salary = req.body.salary;
    let isactive = req.body.isactive;
    let createdat = new Date().toISOString().substring(0, 19).replace('T', ' ');
    connection.query("UPDATE `workers` SET `name`= '" + name + "', `department` = '" + department + "',`salary` ='" +
        salary + "',isactive='" + isactive + "',createdat='" + createdat + "'  where `id`= " + id, function (err, results) {
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
app.listen(PORT1, () => console.log(`Server2 is listening on port B ${PORT1}`))
