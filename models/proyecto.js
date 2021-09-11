const mongoose = require('mongoose');
const schema = mongoose.Schema

const proyectSchema = new schema({
    name: {type:String, required:true},
    description: {type:String, required:true},
    langs: {type:String, required:true},
    imgPath: {type:String, required:true}
})

module.exports = mongoose.model('proyect', proyectSchema);