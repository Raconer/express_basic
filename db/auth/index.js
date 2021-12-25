const getConnection = require('../db');

getConnection((conn) => {
  conn.query(
    "select * from info"
  );
  conn.release();
});
