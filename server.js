var koa = require('koa');

var config = require('./server/config/config');

var mongoose = require('mongoose');

mongoose.connect(config.mongodb.url)
    .connection
    .on('error', function (ex) {
        console.log(ex);
    }).on('open', function(){
        console.log('mongodb open');
    });

var logger = require('koa-logger');
var app = koa();
var bodyParser = require('koa-bodyparser');
var cors = require('koa-cors');
var csrf = require('koa-csrf');


app.use(logger());


app.use(bodyParser());

//csrf
// app.use(csrf());

//corssdomain
app.use(cors());


//router
app.use(require('./server/router/status.router').routes());
app.use(require('./server/router/user.router').routes());
app.use(require('./server/router/role.router').routes());



app.listen(config.port);

console.log('listening on port %s', config.port);