var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: {
        firstName: String,
        lastName: String
    },
    email: String
});

UserSchema.plugin(mongoosePaginate);
const User = mongoose.model('User', UserSchema);

module.exports = User;