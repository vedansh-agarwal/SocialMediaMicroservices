const PROFILE = require('../models/Profile');
const fs = require('fs');

async function createProfile(req, res) {
    try {
        if(req.files.avatar.mimetype.split('/')[0] !== 'image') {
            return res.status(400).json({
                message: 'Invalid file type'
            });
        }
        const fileName = `${req.userId}.${req.files.avatar.mimetype.split('/')[1]}`;
        req.files.avatar.mv('./uploads/' + fileName);
        const profile = new PROFILE({
            bio: req.body.bio,
            avatar: fileName,
            userID: req.userId,
        });
        
        const newProfile = await profile.save();
        res.status(200).json({
            message: 'Profile created successfully',
            profileId: newProfile._id
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

async function deleteProfile(req, res) {
    try {
        fs.readdirSync('./uploads').forEach(file => {
            if (file.startsWith(req.userId)) {
                fs.unlinkSync('./uploads/' + file);
            }
        });
        await PROFILE.findOneAndDelete({
            userID: req.userId
        });
        res.status(200).json({
            message: 'Profile deleted successfully'
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

async function getAllProfiles(req, res) {
    try {
        const profiles = await PROFILE.find();
        res.status(200).json(profiles);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    createProfile,
    deleteProfile,
    getAllProfiles
}