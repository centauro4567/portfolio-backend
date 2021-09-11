const mongoose = require("mongoose");

const URI = 'mongodb://localhost/portafolio'

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology:true})
        .then(db => console.log('La base de datos esta conectada!'))
        .catch(err => console.log(err))

module.exports = mongoose;