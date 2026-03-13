import { BiLike } from "react-icons/bi";
import { MdComment } from "react-icons/md";
import Button from "./Button";
import { useContext } from "react";
import { PostContext } from "../store/PostContext";


const PostCard = ({ post , openPostDetail}) => {
    const { likePostHandler } = useContext(PostContext);

    if (!post) return null;
    console.log(post)

    const {
        title,
        content,
        category,
        createdAt,
        author
    } = post;

    return (
        <div className="bg-gray-800 border flex flex-col justify-between border-gray-700 rounded-2xl p-5 shadow-md hover:shadow-lg transition duration-300 w-[300px] min-h-[300px]">

            {/* Author + Date */}
            <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-gray-400">
                    Posted by{" "}
                    <span className="font-medium text-purple-400">
                        {author?.userName}
                    </span>
                </span>

                {createdAt && (
                    <span className="text-xs text-gray-500">
                        {new Date(createdAt).toLocaleDateString()}
                    </span>
                )}
            </div>
            <div>

                {/* Title */}
                <h2 className="text-xl font-semibold text-white mb-2">
                    {title}
                </h2>

                {/* Content */}
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
                    {content}
                </p>

                {/* Category Badge */}
                {category && (
                    <div className="mt-4">
                        <span className="bg-purple-600/20 text-purple-400 text-xs px-3 py-1 rounded-full">
                            {category}
                        </span>
                    </div>
                )}
            </div>

            <div className="flex gap-5">
                
            <button className="flex items-center gap-2 border-none text-xl"
             onClick={() =>likePostHandler(post._id)}>
                <BiLike size={35} className="text-purple-600 " />
                <span className="text-white">{post.likesCount || 0}</span>
            </button>
            
             <button className="flex items-center gap-2 border-none text-xl"
                onClick={() => openPostDetail(post)}>
                <MdComment  size={35} className="text-purple-600 " />
                
            </button>
            </div>

        </div>
    );
};

export default PostCard;