const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<h1>Default page / Home</h1>');
});

module.exports = router;