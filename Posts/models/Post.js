const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    post: {
        type: String
    },
    userID: {
        type: String
    }
}, {
    timestamps:true
});

const Post = mongoose.model('Post', schema);
module.exports = Post;