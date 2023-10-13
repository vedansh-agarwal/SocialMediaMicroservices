const POST = require('../models/Post');

async function createPost(req, res) {
    try {
        const newPost = new POST({
            post: req.body.post,
            userID: req.userId
        });
        await newPost.save();
        res.status(200).json({
            message: 'Post created successfully',
            postId: newPost._id
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

async function editPost(req, res) {
    try {
        let editedPost = await POST.findOneAndUpdate({
            _id: req.query.id,
            userID: req.userId
        },
        {
            post: req.body.post
        });
        if(!editedPost) {
            return res.status(404).json({
                message: 'Post not found'
            });
        } else {
            return res.status(200).json({
                message: 'Post edited successfully'
            });
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

async function deletePost(req, res) {
    try {
        console.log(req.query.id);
        let deletedPost = await POST.findOneAndDelete({
            _id: req.query.id,
            userID: req.userId
        });
        if(!deletedPost) {
            return res.status(404).json({
                message: 'Post not found'
            });
        } else {
            return res.status(200).json({
                message: 'Post deleted successfully'
            });
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

async function getAllPosts(req, res) {
    try {
        const posts = await POST.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    createPost,
    editPost,
    deletePost,
    getAllPosts
}