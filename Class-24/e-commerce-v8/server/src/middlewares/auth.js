const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('../core/ApiError');

const isLoggedIn = (req, res, next) => {
    const token = req.headers?.authorization.replace('Bearer ', '');
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = payload.userId;
    }
    catch (err) {
        throw new AuthenticationError("Please login to continue");
    }
    return next();
}

module.exports = {
    isLoggedIn
}