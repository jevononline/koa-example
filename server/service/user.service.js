
require('../model/user');
var mongoose = require('mongoose');
var status = require('../enum/status');
var User = mongoose.model('User');
var ObjectId = mongoose.Types.ObjectId

module.exports = {
    *page(pageNumber, pageSize) {
        var totalCount = yield User.count({}).exec();
        var pageCount = Math.ceil(totalCount / pageSize);
        var result = yield User.find({}, { password: 0 }).skip((pageNumber - 1) * pageSize).limit(pageSize).exec();
        return { items: result, totalCount, pageCount };
    },
    *add(user) {
        
    },
    *findById(userId) {
        
        var result = yield User.findOne({ _id: new ObjectId(userId) }, {password: 0}).exec();
        return result;
    }
}