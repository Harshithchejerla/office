const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200);
  res.end('Hello World\n');
}).listen(8080,'localhost');
console.log('server running ');




