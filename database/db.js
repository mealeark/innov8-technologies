const mysql = require('mysql');

const connect = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
})

connect.connect((err) => {
  if (err) throw err;
  connect.query("CREATE DATABASE IF NOT EXISTS Innovation8", (err, result) => {
    if (err) throw err;
    console.log("Innovation8 Database Created!");
  })
  connect.end();
})