const mongoose = require ('mongoose')


const productSchema = mongoose.Schema({
    name: String,
    detial: {
        type: String
    },
    price: {
        type: Number
    },
    file: String

},{timestamps: true})

module.exports = mongoose.model('product',productSchema)