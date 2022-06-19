//

const {
   trace,
   stub
} = require('../helper');

const MONGO_URI = process.env.MONGO_URI;

require("dotenv").config();
const mongoose = require('mongoose');

mongoose.connect(MONGO_URI, {
   useNewUrlParser: true,
   useUnifiedTopology: true
}, () => {
   trace('mongoose connected')(MONGO_URI)
})

module.exports.Place = require('./places');
module.exports.Comment = require('./comment');