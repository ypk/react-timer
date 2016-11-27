var express = require('express');
var app = express();

var port = process.env.port || 8080;
var path = __dirname + '/public';

app.use(express.static(path));

app.listen(port, function() {
    console.info("Webserver running on port", port);
});
