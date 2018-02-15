var mongoose = require('mongoose');
var Compilation = require('./compilation.model').schema;

var Schema = mongoose.Schema;

var CompilationItemSchema = new Schema({
    name: String,
    type: String,
    description: String,
    compilations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Compilation', required: true }]
});

// CompilationItemSchema.plugin(mongoosePaginate);
const CompilationItem = mongoose.model('CompilationItem', CompilationItemSchema);

module.exports = CompilationItem;