var express = require('express');

var router = express.Router();
var CompilationController = require('../../controllers/compilation.controller');

// Map the API endpoints to the controller functions
router.get('/', CompilationController.getCompilations);
router.get('/:id', CompilationController.getCompilation);
router.post('/', CompilationController.createCompilation);
router.put('/', CompilationController.updateCompilation);
router.delete('/:id', CompilationController.deleteCompilation);

module.exports = router;