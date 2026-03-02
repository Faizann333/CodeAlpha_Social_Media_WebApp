const {postUploadPostController} = require('../Controllers/postController');
const {getFetchPostsController} = require('../Controllers/postController');
const {authMiddleware} = require('../Middlewares/authMiddleware');

const express = require('express');
const postRouter = express.Router();

postRouter.post('/upload-post', authMiddleware,postUploadPostController);
postRouter.get('/fetch-posts',authMiddleware, getFetchPostsController);

module.exports = { postRouter };