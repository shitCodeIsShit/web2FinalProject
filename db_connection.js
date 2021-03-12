var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express()

var connection = mysql.createConnection({
    host: "10.114.34.9",
    port: "3306",
    user: "user",
    password: "asdasd",
    database: "sounds_db"
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// enable CORS without external module
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// We need some get request where the user gets list of sounds data from db
app.get('/getSoundData', function (req, res) {
    var sql = "SELECT * FROM sounds_total;"
    connection.query(sql, function (err, result) {
        if (err) throw err;

        response = {
            duck: result[0].duck,
            victory: result[0].victory,
            cow: result[0].cow,
            bellHigh: result[0].bellHight,
            knock: result[0].knock,
            lazer: result[0].lazer,
            bellLow: result[0].bellLow,
            tadaa: result[0].tadaa
        }

        console.log("Sent some data to client")
        res.send(JSON.stringify(response))
        res.end();
    })
})

app.post('/duckSoundClicked', function (req, res) {
    var sql = "UPDATE sounds_total SET duck = duck + 1";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("someone clicked duck!");
    });
})

app.post('/successSoundClicked', function (req, res) {
    var sql = "UPDATE sounds_total SET victory = victory + 1";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("someone clicked victory!");
    });
})

app.post('/duckSoundClicked', function (req, res) {
    var sql = "UPDATE sounds_total SET duck = duck + 1";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("someone clicked duck!");
    });
})

app.post('/cowSoundClicked', function (req, res) {
    var sql = "UPDATE sounds_total SET cow = cow + 1";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("someone clicked cow!");
    });
})

app.post('/dingSoundClicked', function (req, res) {
    var sql = "UPDATE sounds_total SET bellHight = bellHight + 1";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("someone clicked bellHigh!");
    });
})

app.post('/knockSoundClicked', function (req, res) {
    var sql = "UPDATE sounds_total SET knock = knock + 1";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("someone clicked knock!");
    });
})

app.post('/lazerSoundClicked', function (req, res) {
    var sql = "UPDATE sounds_total SET lazer = lazer + 1";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("someone clicked lazer!");
    });
})

app.post('/bellSoundClicked', function (req, res) {
    var sql = "UPDATE sounds_total SET bellLow = bellLow + 1";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("someone clicked belLow!");
    });
})

app.post('/tadaaSoundClicked', function (req, res) {
    var sql = "UPDATE sounds_total SET tadaa = tadaa + 1";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("someone clicked tadaa!");
    });
})

app.listen(3000)