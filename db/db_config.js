require('dotenv').config();

const db_config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_TABLE,
  connectionLimit: process.env.DB_CONNECTION_LIMIT
}

module.exports = db_config;