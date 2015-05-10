var express         = require('express');
var path            = require('path');
var favicon         = require('serve-favicon');
var logger          = require('morgan');
var cookieParser    = require('cookie-parser');
var session         = require('express-session');
var bodyParser      = require('body-parser');
var csrf            = require('csurf');
var passport        = require('passport');
var flash           = require('connect-flash');
var morgan          = require('morgan');
var mongoose = require('mongoose');

var app = express();

// mongodb ORM
var configDB = require('./config/database.js');
console.dir(configDB.url)
mongoose.connect(configDB.url); // connect to our database

require('./config/passport')(passport); // pass passport for configuration

var Schema = mongoose.Schema;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var users = require('./routes/users')
var routes = require('./routes/index');
var posts = require('./routes/posts');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'crypt0pr0j3ct', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 
app.use(csrf());
app.use(express.static(path.join(__dirname, 'public')));

require('./routes/login')(app, passport); // load our routes and pass in our app and fully configured passport
app.use('/', routes);
app.use('/users', users);
app.use('/posts', posts);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

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

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});


module.exports = app;
