import PostCard from "./PostCard";

const PostList = ({posts, openPostDetails}) => {
    const openPostDetail = (post) => {
        console.log("from pot component")
        // setSelectedPost(post);
    };

  return (
    <div className="max-w-[950px ] mx-auto flex flex-wrap justify-center gap-3 p-4">
      
      {posts && posts.map((post) => (
       <PostCard key={post._id} post={post} openPostDetail={openPostDetails} />
      ))}
    </div>
  )
}

export default PostList;
