const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    bio: {
        type: String
    },
    userID: {
        type: mongoose.Types.ObjectId,
        unique: true
    },
    avatar: {
        type: String
    }
});

const Profile = mongoose.model('Profile', schema);
module.exports = Profile;