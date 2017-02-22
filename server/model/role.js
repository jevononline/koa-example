var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var status = require('../enum/status');

var roleSchema = new Schema({
    roleName: { type: String, required: true },
    status: { type: Number, default: 1 }
}, { collection: 'role' });

mongoose.model('Role', roleSchema);

module.exports = mongoose.model('Role');
