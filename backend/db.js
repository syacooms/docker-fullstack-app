const mysql = require("mysql");
const pool = mysql.createPool({
    connectionLimit:10,
    host:precess.env.MYSQL_HOST,
    user:precess.env.MYSQL_USER,
    password:precess.env.MYSQL_ROOT_PASSWORD,
    database: precess.env.MYSQL_DATABASE,
    port: precess.env.MYSQL_PORT
});

exports.pool = pool;