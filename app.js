// Load Dependencies
var express = require('express');
var swig = require('swig');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//  Require Routes
var index = require('./routes/index');
var api = require('./routes/api');
var admin = require('./routes/admin');
var posts = require('./routes/posts');
var projects = require('./routes/projects');

// Initialize App
var app = express();

// Which Port to Listen to Depending on Environment
app.set('port', (process.env.PORT || 8080));

// Intialize and load View Template Swig
var swig = new swig.Swig();
app.set('views', path.join(__dirname, 'views'));
app.engine('html', swig.renderFile);
app.set('view engine', 'html');

// Require Server MiddleWare and declare static directory

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Initial Routes
app.use('/', index);
app.use('/api', api);
app.use('/admin', admin);
app.use('/posts', posts);
app.use('/projects', projects);

// Catch 404 and forward to error handler
app.use(function(req,res,next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//////////////////
// Error Handlers
\\\\\\\\\\\\\\\\\\

// Development error handler
// Will print statcktrace

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// Production Error Handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(app.get('port'), function(){
  console.log('Listening to', app.get('port'));
});

module.exports = app;
