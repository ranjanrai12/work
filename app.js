 const http = require('http');

// const hostName = '127.0.1.1';
// const port = 3000;

// const server = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader('content-Type','text/html');
//     res.write('<html>');
//     res.write('<head><title>My First Page</title></head>');
//     res.write('<body><h1>Coming from node server!!<h1></body>');
//     res.write('</html>');
//     res.end();
// });

// server.listen(port);

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: false}));


app.use('/add-product',(req, res, next)=>{
    console.log("the another middle ware!!");
    res.send("<form action='/product' method='POST'><input type='text'name='title'><button type='submit'>Add Product</button> </form>");
});

app.post('/product',(req,res,next)=>{
  console.log(req.body);
  res.redirect('/')
});

app.use('/', (req,res,next) => {
  console.log("first console");
  res.send("<h1>Hello from express!!</h1>")
});
const server = http.createServer(app);

server.listen(3000);
