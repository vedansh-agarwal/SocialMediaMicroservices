const jwt = require('jsonwebtoken');

const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
}

const verifyIdentity = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const token = bearerHeader.split(' ')[1];
        const verified = verifyToken(token);
        if (verified) {
            req.userId = verified._id;
            next();
        } else {
            res.sendStatus(403);
        }
    } else {
        res.sendStatus(403);
    }
}

module.exports = {
    verifyIdentity
}