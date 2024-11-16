const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const catchAsync = require('../core/catchAsync');
const { BadRequestError } = require('../core/ApiError');
const { isLoggedIn } = require('../middlewares/auth');

// Get All products
router.get('/', catchAsync(async (req, res) => {
    const products = await Product.find();
    res.status(200).json(products);
}));

// Create a new Product
router.post('/', catchAsync(async (req, res) => {
    const { title, price, description, image } = req.body;
    await Product.create({ title, price, description, image });
    res.status(201).json({ status: "SUCCESS", message:'Product create successfully' });
}));

//Get a single product
router.get('/:id',isLoggedIn,  catchAsync(async(req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        throw new BadRequestError(`Product with id ${id} not found`);
    }
    res.status(200).json(product);
})); 

// Update a single product
router.patch('/:id', catchAsync(async(req, res) => {
    const { title, price, description, image } = req.body;
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        throw new BadRequestError(`Product with id ${id} not found`);
    }
    await Product.findByIdAndUpdate(id, { title, price, description, image });
    res.status(200).json({ status: "SUCCESS", message: 'Product updated successfully' });
}));

// Delete a single product
router.delete('/:id',catchAsync(async(req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        throw new BadRequestError(`Product with id ${id} not found`);
    }
    await Product.findByIdAndDelete(id);
    res.status(200).json({ status: "SUCCESS", message: "Product deleted successfully" });
}));

module.exports = router;

