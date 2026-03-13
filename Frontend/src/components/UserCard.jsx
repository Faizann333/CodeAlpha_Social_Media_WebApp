import Button from "./Button";
import { useContext } from "react";
import { UserContext } from "../store/UserContext";

const UserCard = ({ user }) => {
  const { userFollowHandler } = useContext(UserContext);
  if (!user) return null;

  const {
    _id,
    name,
    userName,
    followers = [],
    following = [],
    profilePic
  } = user;

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-5 w-full max-w-[300px] shadow-md hover:shadow-lg transition duration-300">

      {/* Avatar */}
      <div className="flex justify-center mb-4">
        {profilePic ? (
          <img
            src={profilePic}
            alt={userName}
            className="w-20 h-20 rounded-full object-cover border-2 border-purple-500"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center text-2xl font-bold text-white">
            {name?.charAt(0).toUpperCase()}
          </div>
        )}
      </div>

      {/* User Info */}
      <div className="text-center space-y-1">
        <h2 className="text-lg font-semibold text-white">
          {name || "Unnamed User"}
        </h2>

        <p className="text-sm text-gray-400">
          @{userName || "username"}
        </p>
      </div>

      {/* Stats */}
      <div className="flex justify-center gap-6 mt-4 text-sm text-gray-300">
        <div className="text-center">
          <p className="font-semibold">{followers.length}</p>
          <p className="text-gray-500 text-xs">Followers</p>
        </div>

        <div className="text-center">
          <p className="font-semibold">{following.length}</p>
          <p className="text-gray-500 text-xs">Following</p>
        </div>
      </div>

      {/* Follow Button */}
      <div className="mt-5 flex justify-center">
        <Button name="Follow" onClick={() => userFollowHandler(_id)} className={"bg-purple-600 w-[90px]"} />
      </div>
    </div>
  );
};

export default UserCard;


// import Button from "./Button";

// const UserCard = ({ user }) => {
//   console.log("UserCard props:", user); // Debugging line to check the user prop
//   return (
//     <div className='border-2 border-gray-500 w-[200px] h-[200px]'>
//       <h1 className="text-2xl font-bold">{user.name}</h1>
//       <p className="text-gray-600">{user.userName}</p>
//       <p className="text-gray-500">followers: {user.followers}</p>
//       <p className="text-gray-500">following: {user.following}</p>

//       <Button name="Follow"></Button>
//     </div>
//   )
// }

// export default UserCard;