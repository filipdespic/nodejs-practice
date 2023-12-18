const path = require('path');

const express = require('express');

const rootDit = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDit, 'views', 'shop.html'));
});

module.exports = router;