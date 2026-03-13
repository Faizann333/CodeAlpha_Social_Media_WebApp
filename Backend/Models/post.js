const {mongoose} = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    content: { type: String, required: true, maxlength: 500 }
  },
  { timestamps: true }
);

const postSchema = new mongoose.Schema(
    {
        content: {  
            type: String,
            required: true,
        },      

        title: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },

        author : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        likesCount: {
            type: Number,
            default: 0
         },
        comments: [commentSchema]
    },{ timestamps: true });

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

module.exports = { Post };

