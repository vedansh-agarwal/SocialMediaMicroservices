const USER = require('../models/User');
const jwtHandler = require('../config/jwtHandler');

async function signup(req, res) {
    try {
        const user = new USER({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        const newUser = await user.save();
        res.status(200).json({
            message: 'User created successfully',
            token: jwtHandler.signToken(newUser._id)
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

async function login(req, res) {
    try {
        const user = await USER.findOne({
            email: req.body.email,
            password: req.body.password,
        });
        res.status(200).json({
            message: 'User logged in successfully',
            token: jwtHandler.signToken(user._id)
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

async function getAllUsers(req, res) {
    try {
        const users = await USER.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    signup,
    login,
    getAllUsers
}