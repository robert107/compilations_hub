var express = require('express');
var router = express.Router();
// var users = require('../api/users.route');
var compilations = require('./api/compilations.route');

//router.use('/users', users);
router.use('/compilations', compilations);

module.exports = router;