import { useContext, useEffect } from "react";
import { PostContext } from "../store/PostContext";
import { AuthContext } from "../store/AuthContext";
import PostList from "../components/PostList";

const Profile = () => {
  const { userPosts, fetchUserPosts } = useContext(PostContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchUserPosts();
  }, []);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Cover Section */}
      <div className="w-full h-48 bg-gradient-to-r from-purple-700 to-indigo-800"></div>

      {/* Profile Info Section */}
      <div className="max-w-5xl mx-auto px-6">

        {/* Avatar + Basic Info */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between -mt-16">

          {/* Left Side */}
          <div className="flex items-center gap-6">

            {/* Avatar */}
            <div className="w-32 h-32 rounded-full bg-gray-800 border-4 border-gray-950 flex items-center justify-center text-4xl font-bold">
              {user.name?.charAt(0).toUpperCase()}
            </div>

            {/* Name + Username */}
            <div>
              <h2 className="text-3xl font-bold">
                {user.name}
              </h2>
              <p className="text-gray-400">
                @{user.userName}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 md:mt-0 flex gap-3">
            <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg text-sm font-medium transition">
              Edit Profile
            </button>
            <button className="border border-gray-600 hover:bg-gray-800 px-5 py-2 rounded-lg text-sm transition">
              Share
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex gap-8 mt-6 text-sm text-gray-300">
          <div>
            <span className="font-semibold text-white">
              {userPosts?.length || 0}
            </span>{" "}
            Posts
          </div>
          <div>
            <span className="font-semibold text-white">
              {user.followers?.length || 0}
            </span>{" "}
            Followers
          </div>
          <div>
            <span className="font-semibold text-white">
              {user.following?.length || 0}
            </span>{" "}
            Following
          </div>
        </div>

        {/* Bio Section */}
        {user.bio && (
          <div className="mt-4 text-gray-300 max-w-2xl">
            <p>{user.bio}</p>
          </div>
        )}

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 mb-6"></div>

        {/* Posts Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Posts
          </h3>

          {userPosts && userPosts.length > 0 ? (
            <PostList posts={userPosts} />
          ) : (
            <p className="text-gray-500">No posts yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;



// import { useContext , useEffect } from "react";
// import { PostContext } from "../store/PostContext";
// import { AuthContext } from "../store/AuthContext";
// import PostList from "../components/PostList";

// const Profile = () => {
//   const { userPosts, fetchUserPosts  } = useContext(PostContext);
//   const {user} = useContext(AuthContext);
//   console.log(user);

//   useEffect(()=>{
//         fetchUserPosts();
//   },[])
//   console.log(userPosts);

//   return (
//     <div className="max-w-[950px ] min-h-screen  flex flex-col justify-start items-center bg-gray-900  mx-auto  flex-wrap  gap-3 p-4">
//       <h1 className="text-2xl font-bold text-white">Profile page </h1>

//         {userPosts && userPosts.length > 0 ? (
//           <PostList posts={userPosts} />
//         ) : (
//           <p className="text-red-400">No posts found.</p>
//         )}
        
//     </div>
//   )
// }

// export default Profile
