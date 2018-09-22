
// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Project = require('../models/project');
var Workbook = require('../models/workbook')

// Routes
Project.methods(['get', 'put', 'post', 'delete']);
Project.register(router, '/projects');

Workbook.methods(['get', 'put', 'post', 'delete']);
Workbook.register(router, '/workbooks');
// Return router
module.exports = router;
