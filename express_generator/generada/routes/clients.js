"use strict";

var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
    console.log('middleware de router clients');
    next();
});

router.get('/', function(req, res, next) {
    console.log(req.query);
    res.send('respuesta a clients');
});

router.get('/:id', function(req, res, next) {
    console.log(req.params);
    res.send('recibido parametro '+req.params.id);
});

router.post('/', function(req, res, next) {
    console.log('req.body ', req.body);
    res.json({recibido: req.body.num});
});

module.exports = router;