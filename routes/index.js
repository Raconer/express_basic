var express = require('express');
var router = express.Router();
const getConnection = require('../db/db');

require('dotenv').config();



/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Start Get");

  getConnection((conn) => {
    console.log("Start Query");
    conn.query(
      "insert into `info`(`data`) values('data')"
    );
    console.log("End Query");
    conn.release();
  });

  res.json({ title: process.env.host });
});

module.exports = router;
