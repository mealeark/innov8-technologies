const mysql = require('mysql');
const UsersCollection = require('./models/user');

const connect = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
})

connect.connect((err) => {
  if (err) throw err;
  connect.query("CREATE DATABASE IF NOT EXISTS Innovation8", (err, result) => {
    if (err) {
      console.log('this is err');
      throw err;
    }
    console.log("Innovation8 Database Created!");
  })
  connect.end();
})

UsersCollection.Users.forge([
  {email: 'kennyle37@gmail.com'},
  {mailing_subscription: true},
  {password: 'smellingmonkey'},
  {first_name: 'harambe'},
  {last_name: 'wasAGorilla'}
])

UsersCollection.Users.invokeThen('save').then(function() {
  console.log('shit worked yall')
})
