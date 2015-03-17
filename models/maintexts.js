var mongoose = require('../config/mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
 name:{
  type: String,
  unique: true,
  required: true
 },
 body:{
  type: String
 },
 url:{
  type: String,
  unique: true,
  required: true  
 }
});

exports.maintexts = mongoose.model('maintexts', schema);