const mysql = require('mysql2')
const fs = require('fs')

require('dotenv').config()

const db = mysql.createConnection({
  host:     process.env.DB_HOST,
  port:     process.env.DB_PORT,
  user:     process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    ca: fs.readFileSync(process.env.DB_CA_PATH),
    rejectUnauthorized: true
  }
})

db.connect(err => {
  if (err) console.error('DB connection error:', err)
  else     console.log('Connected to TiDB Cloud MySQL')
})

module.exports = db