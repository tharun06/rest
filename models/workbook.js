
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var workbookSchema = new mongoose.Schema({
    project: {id:String, name:String},
    owner: {id: String},
    tags : {},
    id: String,
    name:String,
    contentUrl:String,
    showTabs:String,
    size:String,
    createdAt:String,
    updatedAt:String,
});

// Return model
module.exports = restful.model('Workbook', workbookSchema);
