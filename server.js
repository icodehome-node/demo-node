var express = require('express');
var app = express();

// This is  on https://nodejs.org/api/crypto.html  Generates cryptographically strong pseudo-random data 

var rendom = require('./module/module.js');

var crypto = require('crypto');

app.get('/', function(req, res){
    crypto.randomBytes(10,(err, buf) => {
        var cryptCar = buf.toString('hex');
        res.send(
            `Rendom Char : ${rendom.RandomChar(12)} <br>
            Crpto Char : ${cryptCar}`
        );
        //res.send('Rendom char :' + rendom.RandomChar(12));
    });
});

app.listen('3000', function() {
    console.log('App Is running on port 3000');
});