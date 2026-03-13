const {
    getFetchPostsController,
    getFetchUserPostsController,
    postUploadPostController,
    postLikePostController,
    postCommentPostController,
} = require("../Controllers/postController");
const { authMiddleware } = require("../Middlewares/authMiddleware");

const express = require("express");
const postRouter = express.Router();

postRouter.post("/upload-post", authMiddleware, postUploadPostController);
postRouter.get("/fetch-posts",  getFetchPostsController);
postRouter.get(
    "/fetch-user-posts",
    authMiddleware,
    getFetchUserPostsController,
);
postRouter.post("/like-post/:id", postLikePostController);
postRouter.post("/comment-post/:id", authMiddleware, postCommentPostController);

module.exports = { postRouter };
