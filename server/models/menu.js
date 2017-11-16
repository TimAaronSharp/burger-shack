var mongoose = require('mongoose')
var burgers = require('./burger')
var drinks = require('./drink')
var sides = require('./side')

// var Burgers = require('../routes/burger-routes')
// var Drinks = require('../routes/drink-routes')
// var Sides = require('../routes/side-routes')

var schema = new mongoose.Schema({

    burgers: { type: String },
    drinks: { type: String },
    sides: { type: String }

})

module.exports = mongoose.model('Menu', schema)