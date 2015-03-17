var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var config = require('./config');
var gallery = require('./routes/gallery');

var session = require('cookie-session');
var reg = require('./routes/reg');
var auth = require('./routes/auth');
var checkAuth = require('./utils/checkAuth');
var app = express();



// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(session({
//  secret:'test'
// keys: ['key1', 'key2']
           key: 'express.sid',
           secret: 'secretKey',
           saveUninitialized: true,
           resave: true,
           rolling: true,
           cookie: {
           maxAge: 1000,
           secure: true}
}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

styles = config.get('styles');
scripts = config.get('scripts');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(function(req,res,next){
 console.log('app.js: req.session.user: ' + req.session.user2); 
 next();
});

app.get('/', routes.index);
app.use('/users', users);
app.get('/add', routes.add);
app.get('/gallery', gallery.index);
app.get('/reg', reg.index);
app.get('/logout', checkAuth, reg.logout);
app.get('/cabinet', checkAuth, auth.cabinet);
app.get('/:id', routes.index); // в конце gets!
app.post('/reg', reg.send);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// подключаемся к стилям и скриптам
//app.locals.styles = config.get('styles');
//app.locals.scripts = config.get('scripts');

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

// add listener
app.listen(config.get("port"));

module.exports = app;
