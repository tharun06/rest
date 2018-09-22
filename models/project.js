
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var projectSchema = new mongoose.Schema({
    id:String,
    name:String,
    description:String,
    contentPermissions:String
});

// Return model
module.exports = restful.model('Projects', projectSchema);
