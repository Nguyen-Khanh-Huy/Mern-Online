// var express = require('express');
import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/username', function(req, res, next) {
  res.send('asdfd');
});

module.exports = router;
