
var parse = require('co-body');

var mongoose = require('mongoose');
var status = require('../enum/status');

var Role = require('../model/role');
var ObjectId = mongoose.Types.ObjectId

module.exports = {
    *page(next) {
        var query = this.request.query;
        var pageNumber = Number(query.pageNumber);
        var pageSize = Number(query.pageSize);
        var totalCount = yield Role.count({}).exec();
        var pageCount = Math.ceil(totalCount / pageSize);
        var result = yield Role.find({}).skip((pageNumber - 1) * pageSize).limit(pageSize).exec();

        this.body = { data: { items: result, totalCount, pageCount } };
    },
    *add() {
        var model = new Role({ roleName: this.request.body.roleName });

        var result = yield model.save();

        this.body = result;
    },
    *edit() {
        var roleId = this.params.roleId;
        var roleName = this.request.body.roleName;

        var result = yield Role.update({ _id: new ObjectId(roleId) }, { $set: { roleName: roleName } });


        this.body = result;
    }
};