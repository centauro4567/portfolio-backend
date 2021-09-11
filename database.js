const mongoose = require("mongoose");
require('dotenv').config();

const URI = process.env.MONGODB_URI

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology:true})
        .then(db => console.log('La base de datos esta conectada!'))
        .catch(err => console.log(err))

module.exports = mongoose;