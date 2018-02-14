var mongoose = require('mongoose');
var User = require('./user.model').schema;
var CompilationItem = require('./compilation-item.model').schema;

var Schema = mongoose.Schema;
//var mongoosePaginate = require('mongoose-paginate');

var CompilationSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    type: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CompilationItem' }]
});

module.exports = mongoose.model('Compilation', CompilationSchema);