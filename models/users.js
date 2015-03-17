var crypto = require('crypto');
var async = require('async');
var mongoose = require('../config/mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
 username:{
  type: String,
  unique: true,
  required: true
 },
 hashedPassword:{
  type: String,
  required: true  
 },
 salt:{
  type: String,
  required: true  
 },
 created:{
  type: Date,
  default: Date.now
 }
});

schema.methods.checkPassword = function(password){
 console.log(password); 
 console.log(this.encryptPassword(password));
 console.log(this.hashedPassword);
 return this.encryptPassword(password) === this.hashedPassword;
};

schema.statics.autorize = function(username, password, callback){
 var User = this;
 async.waterfall([
    function(callback){
     User.findOne({username:username}, callback)
    },
    function(user, callback){
     if (user){
      if(user.checkPassword(password)){
       callback(null,user);
      }
      else{
       console.log('wrong password');
      }
     }
     else{
      var user = new User({username:username, password:password});
      user.save(function(err){
       callback(null, user);
      });
     }
    } 
   ], callback);
 };

schema.methods.encryptPassword = function(password){
 return crypto.createHmac('sha1', this.salt)
 .update(password)
 .digest('hex')
};

// создали виртуальную переменную
schema.virtual('password') 
 .set(function(password){
  this._plainPassword = password;
  this.salt = Math.random() + ' ';
  this.hashedPassword = this.encryptPassword(password);  // закриптовали реальный пароль
 })
  .get(function(password){
  return this._plainPassword; // возвращаем реальный пароль
 });

exports.users = mongoose.model('users', schema);