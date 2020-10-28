const  mysql = require('mysql');

return connection = mysql.createConnection({
    connectionLimit: 10,
    host: process.env.DB_HOST1,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

 