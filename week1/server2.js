var express = require('express');
var app = express();

app.use('/', function (req, res) {
    res.send('Hello World!')
});

app.listen(8000, function () {
    console.log("Running Server...")
});
