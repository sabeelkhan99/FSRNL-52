const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        index: true
    },
    passwordHash: {
        type: String,
        required: true
    }
}, { versionKey: false, timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;