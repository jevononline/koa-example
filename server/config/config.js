var path = require('path');
var env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        port: 3000,
        mongodb: { url: 'mongodb://localhost/local' }  //连接到数据库配置
    },
    test:{

    },
    production: {

    }
};

module.exports = config[env];