const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin')
const router = express.Router();

router.get('/', (req,res,next) => {
    // console.log("admin Data", adminData.products)
    // res.sendFile(path.join(rootDir,'views','shop.html'));
    const products = adminData.products;
    /* renders a view and send the html renderd string to the client it accepts optional parameter local and callback 
        an object which property defines local variables for the view*/
    res.render('shop', {prods: products, docTitle: 'Shop',hasProducts: products.length > 0 });
});

module.exports = router;