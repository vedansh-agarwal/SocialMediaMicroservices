const jwt = require('jsonwebtoken');
const signToken = (userId) => {
    return jwt.sign({ _id: userId }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRY
    });
}

module.exports = {
    signToken
}