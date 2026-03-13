import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { MdCancelPresentation } from "react-icons/md";

const PostDetail = ({ post , closeDetail}) => {
    const [comments, setComments] = useState(post.comments || []);
    const [newComment, setNewComment] = useState("");

    const handleAddComment = (e) => {
        e.preventDefault();

        if (!newComment.trim()) return;

        const comment = {
            _id: Date.now(),
            
            content: newComment,
            createdAt: new Date()
        };

        // show comment instantly
        setComments((prev) => [comment, ...prev]);

        setNewComment("");

        // later you will send to backend here
        // axios.post(`/api/comment/${post._id}`, { content: newComment })
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-150 p-6 z-50 absolute top-0 left-0 w-full">
            <div className=" w-3xl bg-gray-900 border border-gray-800 rounded-xl shadow-lg flex flex-col">
                <div className="flex justify-end p-3">
                    <MdCancelPresentation size={35} className="text-white cursor-pointer" 
                    onClick={closeDetail}/>
                </div>
                {/* Post Section */}
                <div className="border-b border-gray-800 p-5">
                    <h2 className="text-xl font-bold text-white mb-2">{post.title}</h2>

                    <p className="text-gray-300">{post.content}</p>

                    <div className="text-sm text-gray-400 mt-3 flex gap-4">
                        <span>Category: {post.category}</span>
                        <span>{comments.length} comments</span>
                    </div>
                </div>

                {/* Comments Section */}
                <div className="flex-1 overflow-y-auto p-5 space-y-4 max-h-[400px]">

                    {comments.length === 0 && (
                        <p className="text-gray-500 text-center">No comments yet.</p>
                    )}

                    {comments.map((comment) => (
                        <div
                            key={comment._id}
                            className="flex gap-3 items-start border-b border-gray-800 pb-3"
                        >
                            {/* Avatar */}
                            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                {comment.user?.userName?.[0] || "U"}
                            </div>

                            {/* Comment Content */}
                            <div>
                                <p className="text-sm text-white font-semibold">
                                    {comment.user?.userName}
                                </p>

                                <p className="text-gray-300 text-sm">
                                    {comment.content}
                                </p>

                                <span className="text-xs text-gray-500">
                                    {new Date(comment.createdAt).toLocaleString()}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Comment Input */}
                <form
                    onSubmit={handleAddComment}
                    className="border-t border-gray-800 p-4 flex items-center gap-3"
                >
                    <input
                        type="text"
                        placeholder="Add a comment..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-purple-600"
                    />

                    <button
                        type="submit"
                        className="bg-purple-600 hover:bg-purple-700 p-3 rounded-lg transition"
                    >
                        <FiSend className="text-white text-lg" />
                    </button>
                </form>

            </div>
        </div>
    );
};

export default PostDetail;