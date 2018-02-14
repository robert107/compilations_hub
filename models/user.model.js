var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var mongoosePaginate = require('mongoose-paginate');

var UserSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: {
        firstName: String,
        lastName: String,
    },
    email: String
});

module.exports = mongoose.model('User', UserSchema);