const http = require('http');

const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('This always runs!');
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Add Product</h1>');
});

app.use('/', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Any path</h1>');
});

app.listen(3000);        