var mongoose = require('mongoose')

var productSchema = new mongoose.Schema({
    userId: String,
    path: String,
    category: {
        type: String,
        required: true
    },
    type: String,
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('product', productSchema)