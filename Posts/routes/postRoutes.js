const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const {verifyIdentity} = require('../config/jwtHandler');

router.post('/create', verifyIdentity, postController.createPost);

router.patch('/edit', verifyIdentity, postController.editPost);

router.delete('/delete', verifyIdentity, postController.deletePost);

router.get('/getAllPosts', postController.getAllPosts);

module.exports = router;