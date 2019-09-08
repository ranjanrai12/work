 const http = require('http');
 const path = require('path');
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

app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminData.routes);
app.use(shopRouter);

// Page not found
app.use((req,res,next)=>{
  // res.status(404).send("<h1>Page Not Found</h1>")
  // res.status(404).sendFile(path.join(__dirname,'views', '404.html'));
     res.render('404',{pageTitle: 'Page Not Found'})
});
const server = http.createServer(app);

server.listen(5000,()=>{
  console.log("port is listening")
});
