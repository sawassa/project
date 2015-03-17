var session = require('cookie-session')
module.exports = function(req, res, next){
  console.log('checkAuth.js: req.session.user: ' + req.session.user2);
 if (req.session.user2){
  res.redirect('/reg');
 };
 next(); //-- обязательно присутствие middleware (промежуточной ф-и) 
};