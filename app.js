session = require('cookie-session');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var reg = require('./routes/reg');
var routes = require('./routes/index');
var users = require('./routes/users');
var auth = require('./routes/auth');
var checkAuth = require('./utils/checkAuth');
var config = require('./config');
var gallery = require('./routes/gallery');
var chat = require('./routes/chat');
var video = require('./routes/video');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret:'secretworld',
 keys: ['key1', 'key2']
//           key: 'express.sid'
//           secret: 'secretKey',
//           saveUninitialized: true,
//           resave: true,
//           rolling: true,
//           cookie: {
//           maxAge: 1000,
//           secure: true}
}));

styles = config.get('styles');
scripts = config.get('scripts');

app.use(function(req,res,next){
 console.log('app.js: req.session.user: ' + req.session.user2); 
 next();
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', routes.index);
app.use('/users', users);
app.get('/reg', reg.index);
app.get('/add', routes.add);
app.get('/gallery', gallery.index);
app.get('/logout', checkAuth, reg.logout);
app.get('/cabinet', checkAuth, auth.cabinet);
app.get('/chat', chat.index);
app.get('/video', video.index);

/*
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
*/
app.get('/:id', routes.index); // в конце gets!
app.post('/reg', reg.send);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
// подключаемся к стилям и скриптам
app.locals.styles = config.get('styles');
app.locals.scripts = config.get('scripts');

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
//app.listen(config.get("port"));

http.listen(3000, function(){
  console.log('listening on *:3000');
});



module.exports = app;
