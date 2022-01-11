// const getConnection = require('./db');

const mysql = require('mysql');
require('dotenv').config();

let pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_TABLE,
  connectionLimit: process.env.DB_CONNECTION_LIMIT
});

module.exports = function getQuery(sql, callback){
    pool.getConnection((err, conn) =>{
        conn.query(sql, (err, results, fileds)=>{
            callback(err, results)
        });
        conn.release();
    });
}
