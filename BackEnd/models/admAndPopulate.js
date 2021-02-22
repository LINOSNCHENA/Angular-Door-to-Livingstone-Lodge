var mysql = require('mysql');
//////////////////////////////////////////////////// = POOL
var pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

pool.getConnection(function (error, connection) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Connected ADMIN1!:)");
    console.log("Connected ADMIN2!:)");
    console.log("Connected ADMIN3!:)"+connection);
  }
});
module.exports = pool;

/////////////////////////////////////////////////////// = CONNECTION
var connection = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.getConnection(function (error, connection) {
  if (!!error) {
    console.log(error);
  } else {
    console.log('You are connected on (FIRST)  SERVER A');

    var sqlDb1 = "CREATE TABLE `userupdated` ( id serial AUTO_INCREMENT PRIMARY KEY, fname VARCHAR  (70) default 'Nelson',lname VARCHAR "+
    " (70) default 'Noria', email VARCHAR  (70) NOT NULL, mobile VARCHAR  (70) default 'm7895766895N',     gender VARCHAR "+
    " (76) default 'female', password VARCHAR  (650) NOT NULL,     office VARCHAR  (70) default '+7983646183471n', "+
    "createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,      updatedat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,      UNIQUE  (email,password)  );"
    var sqlDb2 = 'CREATE TABLE `bookings`  (`id` serial AUTO_INCREMENT PRIMARY KEY, `name` varchar  (70) DEFAULT NULL, '+
    '`town` varchar  (70) DEFAULT NULL,    `hotel`varchar  (70) DEFAULT NULL,    `isactive` varchar  (71) DEFAULT NULL,  '+
    '  `createdat` datetime DEFAULT CURRENT_TIMESTAMP)';
    var sqlDb3 = 'CREATE TABLE `employees` (`id` serial AUTO_INCREMENT PRIMARY KEY, `name` varchar  (70) DEFAULT NULL,    `mobile` varchar '+
    ' (70) DEFAULT NULL, `office` varchar(70) DEFAULT NULL, `email` varchar(70) DEFAULT NULL, `createdat` datetime DEFAULT CURRENT_TIMESTAMP )';
    var sqlDb4 = 'CREATE TABLE `workers`( `id` serial AUTO_INCREMENT PRIMARY KEY, `name` varchar (70) DEFAULT NULL,`department` '+
    'varchar (70) DEFAULT NULL, `salary` varchar (70) DEFAULT NULL,    `isactive` varchar (70) DEFAULT NULL, '+
    ' `createdat` datetime DEFAULT CURRENT_TIMESTAMP )';

    var sqlDelete1 = "DROP TABLE IF EXISTS USERUPDATED";
    var sqlDelete2 = "DROP TABLE IF EXISTS BOOKINGS";
    var sqlDelete3 = "DROP TABLE IF EXISTS EMPLOYEES";
    var sqlDelete4 = "DROP TABLE IF EXISTS WORKERS";

    var sqlPop1 = "INSERT INTO `userupdated`(fname,email, password, lname)VALUES ('Marvin', 'ls.marvin@yahoo.com',"+
    " 'M30775263158', 'Nikolas'),  ('Leon', 'Lena.marvin@gmail.com', 'L230775263158', 'Leon');";
    var sqlPop2 = "INSERT INTO `bookings` (`name`,`town`, `hotel`, `isactive`) VALUES "+
    " ('Lorena', 'Vasteras', 'Mango', 2011),  ('Leon', 'Prague', 'Intercontinetal', 2012);";
    var sqlPop3 = "INSERT INTO `employees` (`id`,`name`, `mobile`, `email`, `office`) VALUES "+
    " (1, 'Marvin', '920202020', 'benzo@ben.com', 2001),  (2, 'Xristina', 'm928448', 'stiv.c@ntb.zm', 2002);";
    var sqlPop4 = "INSERT INTO `workers` (`id`,`name`, `department`, `salary`, `isactive`) VALUES "+
    " (1, 'Presly', 'HeadTeacher', '599.02', 1981), (2, 'Kathyrine', 'Professor', '9599.04', 1982);";

    connection.query(sqlDelete1, function (err) { if (err) throw err; console.log("01-TUSER Formated!"); });
    connection.query(sqlDb1, function (err) { if (err) throw err; console.log("02-TUSER created!"); });
    connection.query(sqlPop1, function (err) { if (err) throw err; console.log("03-TUSER populated!"); });

    connection.query(sqlDelete2, function (err, _result) { if (err) throw err; console.log("04-TBOOKING Formated!"); });
    connection.query(sqlDb2, function (err, _result) { if (err) throw err; console.log("05-TBOOKING created!"); });
    connection.query(sqlPop2, function (err, _result) { if (err) throw err; console.log("06-TBOOKING populated!"); });

    connection.query(sqlDelete3, function (err) { if (err) throw err; console.log("07-TEMPLOYEES Formated!"); });
    connection.query(sqlDb3, function (err) { if (err) throw err; console.log("08-TEMPLOYEES created!"); });
    connection.query(sqlPop3, function (err) { if (err) throw err; console.log("09-TEMPLOYEES populated!"); });

    connection.query(sqlDelete4, function (err, _result) { if (err) throw err; console.log("10-TWORKERS Formated!"); });
    connection.query(sqlDb4, function (err, _result) { if (err) throw err; console.log("11-TWORKERS created!"); });
    connection.query(sqlPop4, function (err, _result) { if (err) throw err; console.log("12-TWORKERS populated!"); });

    console.log('You are connected on (THIRD) SERVER C');
  }
});

module.exports = connection;
