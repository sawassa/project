User = require('../models/users').users;
var session = require('cookie-session');

exports.send = function(req, res, next){
 var username = req.body.username; 
 var password = req.body.password;

 User.autorize(username, password, function(err, user){
  req.session.user2 = user._id; 
  console.log('reg.js: req.session.user ' + req.session.user2);
 });

// var users = new User({
//  username: username,
//  password: password
// });
// users.save(function(){
//  console.log('OK');
// });
 res.redirect('/cabinet')
};

exports.index = function(req, res){
 res.render('reg');
};


exports.logout = function(req, res){
 req.session = null;
 res.redirect('/');
};


 
