var http = require('http');

function serve(req, res) {
    var body = 'Hello Wordl!';

    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Content-Length': body.length,
    });

    res.end(body);
}

var server = http.createServer(serve);

server.listen(8000);

console.log('Running server...');