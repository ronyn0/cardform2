var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "ron",
    password: "alligator",
    port: '/var/run/mysqld/mysqld.sock',    
    database: "mydb"
  });

  connection.connect(function(err) {
    if (err) throw err;
});
module.exports = connection;

/* this is my second working example of a module
it works by making the connection and setting the proper variable
to connect to my db, you don't have to do the connection.connect 
function because we're exporting that variable (funtion? who knows) */