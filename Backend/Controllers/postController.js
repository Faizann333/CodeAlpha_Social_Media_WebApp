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
        const posts = await Post.find().populate("author", "username");
        res.status(200).json({ posts });
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};