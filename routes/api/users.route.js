var express = require('express');

var router = express.Router();
var UserController = require('../../controllers/user.controller');

// Map the API endpoints to the controller functions
router.get('/', UserController.getUsers);
router.post('/', UserController.createUser);
router.put('/', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;