var mongoose = require('mongoose');
var config = require('../config');
mongoose.connect("mongodb://localhost/project_db");

module.exports = mongoose;