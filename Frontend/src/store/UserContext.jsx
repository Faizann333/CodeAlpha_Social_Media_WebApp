import { createContext , useState } from "react";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import axios from "axios";
import { toast } from "react-toastify";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]); 

    const fetchUsers = async () => {
        try {
            const res = await axios.get(    
                `${API_BASE_URL}/user/fetch-users`,
                { withCredentials: true }
            );
            setUsers(res.data.users);
        } catch (error) {
            toast.error("Error fetching users:", error);
        }

    }

    const userFollowHandler = async (userId) => {
       
        try {
            const res = await axios.post(
                `${API_BASE_URL}/user/follow/${userId}`,
                {},
                { withCredentials: true }
            );
             toast.success(res.data.message);
        } catch (error) {
            console.log(error)
            toast.error(`Error following user: ${ error.response.data.message || error.message}`);
        }
    }


    return (
        <UserContext.Provider value={{ users, fetchUsers,userFollowHandler }}>
            {children}
        </UserContext.Provider>
    );
}