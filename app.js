const http = require('http');

const hostName = '127.0.1.1';
const port = 3000;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Coming from node server!!<h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(port);