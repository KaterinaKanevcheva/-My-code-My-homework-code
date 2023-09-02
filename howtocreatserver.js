const http = require('http');
const port = 3000;
const server = http.createServer(function (req, res) {
    res.write(`My first web page!`);
    res.end();

});
server.listen(port);

console.log(`My custom web server lisening on port: ${port}`)