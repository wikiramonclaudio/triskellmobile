var express = require('express');
var api = express.Router();
const commentsController = require('../controllers/comments')

api.get('/', commentsController.getComments);


module.exports = api;