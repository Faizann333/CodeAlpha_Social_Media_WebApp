const {Post} = require("../Models/post");

exports.postUploadPostController = async (req, res) => {
    try {
        const { title, content, category } = req.body;

       
        const newPost = new Post({
            title,
            content,
            category,
            author: req.user.userId  

        });

        await newPost.save();
        res.status(200).json({ success: true, message: "Post created successfully", post: newPost });
    } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }   
};

exports.getFetchPostsController = async (req, res) => {
    try {
        const posts = await Post.find().populate("author", "userName ").sort({ createdAt: -1 });
        res.status(200).json({ posts });
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

exports.getFetchUserPostsController = async (req, res) => {
    try {
        const posts = await Post.find({ author: req.user.userId }).populate("author", "userName ").sort({ createdAt: -1 });
        res.status(200).json({ posts });
    } catch (error) {
        console.error("Error fetching user posts:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

exports.postLikePostController = async (req, res) => {
    try {
        
        
        const postId = req.params.id;
        const post = await Post.findById(postId);
       
        if (!post) {
            return res.status(404).json({ success: false, message: "Post not found" });
        }
        post.likesCount += 1;
        await post.save();
        res.status(200).json({ success: true, message: "Post liked successfully", likesCount: post.likesCount });
    } catch (error) {
        console.error("Error liking post:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

exports.postCommentPostController = async (req, res) => {
    try {
        const postId = req.params.id;
        const { comment } = req.body;
        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({ success: false, message: "Post not found" });
        }
        const newComment = {
            user: req.user.userId,
            comment,
        }
        post.comments.push(newComment);
        await post.save();
        res.status(200).json({ success: true, message: "Comment added successfully", comment: newComment });
    } catch (error) {
        console.error("Error adding comment:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
    
};