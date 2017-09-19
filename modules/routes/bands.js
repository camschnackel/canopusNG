var express = require('express');
var router = express.Router();
var bands = ['Modest Mouse', 'The Killers', 'Husker Do', 'The Kills'];

router.get('/', function (req, res) {
    console.log('/bands get hit');
    res.send(bands);
})

module.exports = router;