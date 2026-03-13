import PostList from "../components/PostList"
import { useContext , useEffect , useState } from "react"
import { PostContext } from "../store/PostContext"
import PostDetail from "../components/PostDetail";

const Posts = () => {
    const { posts, fetchPosts } = useContext(PostContext);
    const [selectedPost, setSelectedPost] = useState(null);

    const openPostDetail = (post) => {
        
        setSelectedPost(post);
    };
    useEffect(() => {
        fetchPosts();
    }, [])
    return (
        <div className="text-center bg-gray-900 min-h-screen">
            <h1 className="text-3xl font-bold mb-4 text-gray-100">All Posts</h1>
            <PostList posts={posts} openPostDetails={openPostDetail} />

            {selectedPost && (
        <PostDetail
          post={selectedPost}
          closeDetail={() => setSelectedPost(null)}
        />
      )}

        </div>
    )
}

export default Posts
