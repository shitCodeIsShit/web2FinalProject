var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');

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
// This had something to do with localhost or not :D
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Returns all the sounds and the amount of clicks they have
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

// Returns the lowes click amount sound
app.get('/getLowestSound', function (req, res) {

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

        smallesValue = min(response)

        console.log(smallesValue)

        res.send(JSON.stringify(smallesValue))
        res.end();
    })
})

// Returns the highest amount of clicks sound
app.get('/getHighestSound', function (req, res) {

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

        smallesValue = max(response)

        console.log(smallesValue)

        res.send(JSON.stringify(smallesValue))
        res.end();
    })
})

// -------- This are all just ++ actions if certain sound is clicked -------------

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

// ----------------------------------------------

app.listen(3000)


// Gets json puts it to array sorts it and returns smallest
function min(data) {

    var sortedArray = []

    // Lets put the JSON DATA to array for ez sort
    for (var i in data) {
        sortedArray.push({value: [i, data[i]]})
    }

    // Some tricks for sorting them
    sortedArray.sort(function (a, b) {
        return a.value[1] - b.value[1]
    })

    console.log(sortedArray)

    minValue = {
        name: sortedArray[0].value[0],
        clicks: sortedArray[0].value[1]
    }

    return minValue

}

// Gets json puts it to array sorts it and returns biggest
function max(data) {

    var sortedArray = []

    // Lets put the JSON DATA to array for ez sort
    for (var i in data) {
        sortedArray.push({value: [i, data[i]]})
    }

    // Some tricks for sorting them
    sortedArray.sort(function (a, b) {
        return b.value[1] - a.value[1]
    })

    console.log(sortedArray)

    minValue = {
        name: sortedArray[0].value[0],
        clicks: sortedArray[0].value[1]
    }

    return minValue

}