const express = require('express');
const bodyParser = require('body-parser');

const userRoute = require('./routes/user');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended :false }));

app.get('/hello',(req,res,next) => {
  res.json({message: 'Hello'});
})

app.use('/api/user', userRoute);

module.exports = app;
