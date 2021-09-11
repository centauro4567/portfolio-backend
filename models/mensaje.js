const mongoose = require('mongoose');
const schema = mongoose.Schema

const mensajeSchema = new schema ({

    email: {type:String, required:true},
    subject: {type:String, required:true},
    message: {type:String}

});

module.exports = mongoose.model('mensaje', mensajeSchema);