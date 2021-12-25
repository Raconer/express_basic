const mysql = require('mysql');
const config = require('./db_config');
let pool = mysql.createPool(config);

function getConnection(callback) {
  pool.getConnection(function (err, conn) {
    console.log("Start Connection Pool")
    if(!err) {
      callback(conn);
    }else{
      console.log("Connection Error");
      console.log(err);
    }
  });
}

module.exports = getConnection;