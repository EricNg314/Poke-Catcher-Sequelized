// var mysql = require("mysql2");
var connection;

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
  connection = {
    "development": {
      "username": process.env.MYSQL_USER,
      "password": process.env.MYSQL_KEY,
      "database": "pokemon_db",
      "host": process.env.MYSQL_HOST,
      "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "use_env_variable": "JAWSDB_URL",
      "dialect": "mysql"
    }
  }
// }


module.exports = connection;