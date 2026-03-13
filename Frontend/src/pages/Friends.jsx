import FriendList from "../components/UserList";
import { useContext, useEffect } from "react";
import { UserContext } from "../store/UserContext";

const Friends = () => {
    const {  fetchUsers } = useContext(UserContext);
  
    useEffect(()=>{
        fetchUsers();
    },[])
  return (
    <div className="text-center min-h-screen bg-gray-900">
        <h1 className="text-3xl font-bold py-6 text-gray-100  ">Find Friends</h1>
      <FriendList  />
    </div>
  )
}

export default Friends
