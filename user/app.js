var express = require('express');
var app = express();
var port = 5000;
var user = require('./user.controller');
var bodyParser = require('body-parser');

app.use(bodyParser());

app.get('/full_name', user.userName);


app.get('/bio', user.userBioInp);

app.post('/bio', user.userBioOut)

app.listen(port, function (err) {
    console.log('Running server on ' + port);
});