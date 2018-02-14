var mongoose = require('mongoose');
var Compilation = require('./compilation.model').schema;

var Schema = mongoose.Schema;

var CompilationItemSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    type: String,
    description: String,
    compilations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Compilation' }]
});

module.exports = mongoose.model('CompilationItem', CompilationItemSchema);