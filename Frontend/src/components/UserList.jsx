import { useContext } from "react"
import {UserContext} from "../store/UserContext"
import UserCard from "./UserCard";

const UserList = () => {
  const { users } = useContext(UserContext);
  return (
    <div className=" bg-gray-900 w-full  pb-3 flex flex-wrap gap-3 justify-center mx-auto ">
      {users && users.map((user) => (
        
        <UserCard key={user._id} user={user} />

      ))}
    </div>
  )
}

export default UserList
