const mongoose = require("mongoose");
require('dotenv').config();

const URI = process.env.MONGODB_URI

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(URI)
        .then(db => console.log('La base de datos esta conectada!'))
        .catch(err => console.log(err))

module.exports = mongoose;