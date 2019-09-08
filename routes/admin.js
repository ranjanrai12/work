const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();

const products = []
//admin/add-product => GET Method 
router.get('/add-product',(req, res, next)=>{
    console.log("the another middle ware!!");
    // res.sendFile(path.join(rootDir,'views','add-product.html'))
    // res.send("<form action='/admin/add-product' method='POST'><input type='text'name='title'><button type='submit'>Add Product</button> </form>");
        res.render('add-product',{pageTitle: 'Add Product'})
  });

//admin/add-product => POST Method 

router.post('/add-product',(req,res,next)=>{
  products.push({title: req.body.title})
  console.log(req.body);
  res.redirect('/')
});

// module.exports = router;
exports.routes = router;
exports.products = products;