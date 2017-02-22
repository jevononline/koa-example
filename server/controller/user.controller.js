
var parse = require('co-body');
var mongoose = require('mongoose');
var status = require('../enum/status');

var User = require('../model/user');

var ObjectId = mongoose.Types.ObjectId;

module.exports = {
    *page(next) {
        var query = this.request.query;
        var pageNumber = Number(query.pageNumber);
        var pageSize = Number(query.pageSize);
        
        var totalCount = yield User.count({});
        var pageCount = Math.ceil(totalCount / pageSize);
        var result = yield User.find({}, { password: 0 }).skip((pageNumber - 1) * pageSize).limit(pageSize).exec();
        
        this.body = { data: { items: result, totalCount, pageCount } };
    },
    *add() {
        var user = this.request.body;
        var model = new User(user);

        var result = yield model.save();
        
        this.body = result;
    },
    *findById() {
        var userId = this.params.userId;
        var result = yield User.findOne({ _id: new ObjectId(userId) }, {password: 0}).exec();
        
        this.body = { data: result };
    },
    *edit(){
        var userId = this.params.userId;
        var password = this.request.body.password;
        var result = yield User.update({_id: new ObjectId(userId)}, {$set:{password:password}});
        this.body = result;
    }
};