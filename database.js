var mysql = require("mysql");

var connection = mysql.createConnection({
    host:'localhost',
    database:'student',
    user:'root',
    password:'password'
});

module.exports = connection;