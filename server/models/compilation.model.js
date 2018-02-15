var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var User = require('./user.model').schema;
var CompilationItem = require('./compilation-item.model').schema;

var Schema = mongoose.Schema;

var CompilationSchema = new Schema({
    name: { type: String, required: true },
    type: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CompilationItem' }]
});

CompilationSchema.plugin(mongoosePaginate);
const Compilation = mongoose.model('Compilation', CompilationSchema);

module.exports = Compilation;