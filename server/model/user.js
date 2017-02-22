var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    userName: { type: String, required: true },
    fullName: { type: String, required: true },
    password: { type: String, required: true },
    status: { type: Number, default: 1 }
}, { collection: 'user' });
mongoose.model('User', userSchema);

module.exports = mongoose.model('User');
