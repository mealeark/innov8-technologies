const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
//create variable for userRoute
// const userRoute = require('./routes/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '../client/dist'));

//uses the route for user
// app.use('/user', userRoute);

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});