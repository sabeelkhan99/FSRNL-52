const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    image: {
        type: String
    },
    description: {
        type: String
    }
}, {versionKey: false, timestamps: true});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;