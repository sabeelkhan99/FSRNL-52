const express = require('express');
const app = express();
const cors = require('cors');

// Import Routes 
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');
const { NotFoundError } = require('./core/ApiError');

// Pre-Defined Middlewares
app.use(cors({ origin: [process.env.FRONTEND_ORIGIN], credentials: true }));
app.use(express.json({limit:'10mb'}));

// APIs
app.use("/api/v1/products", productRoutes);
app.use('/api/v1/users', userRoutes);

app.all("*", (req, res, next) => next(new NotFoundError()));

// Error Handing middleware
app.use((err, req, res, next) => {
    const { status = 500, message = 'Internal Server Error' } = err;
    return res.status(status).json({ status: "FAILED", message: message });
});

module.exports = app;