const {User} = require("../Models/user");

exports.getFetchUsersController = async (req, res) => {
    try {
       
        const users = await User.find().select("-password")
        res.status(200).json({ success: true, users: users });
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

exports.postFollowUserController = async (req, res) => {
    try {
        const userIdToFollow = req.params.userId;
        const currentUserId = req.user.userId;
        console.log("Attempting to follow user:", userIdToFollow, "by user:", currentUserId);

        if (userIdToFollow === currentUserId) {
            return res.status(400).json({ success: false, message: "You cannot follow yourself" });
        }
        
        const userToFollow = await User.findById(userIdToFollow);
        const currentUser = await User.findById(currentUserId);
        if (!userToFollow || !currentUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        if (currentUser.following.includes(userIdToFollow)) {
            return res.status(400).json({ success: false, message: "You are already following this user" });
        }

        currentUser.following.push(userIdToFollow);
        userToFollow.followers.push(currentUserId);
        await currentUser.save();
        await userToFollow.save();
        res.status(200).json({ success: true, message: "User followed successfully" });


    } catch (error) {
        console.error("Error following user:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};