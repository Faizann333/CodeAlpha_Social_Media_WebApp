import { useContext } from 'react'
import Button from './Button'
import { useNavigate, NavLink } from 'react-router-dom'
import { AuthContext } from '../store/AuthContext'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const UserNavBar = () => {
    const {user, handleLogout} = useContext(AuthContext);
    const navigate = useNavigate();
        
    return (
        <header className='flex justify-between items-center sticky z-50 top-[-10px] h-[70px] bg-black text-gray-100 px-4'>
            <div className="ml-6 font-bold text-2xl">SocialX</div>
            <nav className='flex items-center gap-3'>
                <ul className="flex gap-7 pr-9">
                    <li className="hidden sm:block relative  px-1">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `relative inline-block px-1 before:content-[''] before:absolute before:-bottom-1 before:left-0 
       before:h-[2px] before:w-0 before:transition-all before:duration-300 before:bg-purple-500
       ${isActive ? "before:w-full" : "hover:before:w-full"}`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="hidden sm:block relative  px-1">
                        <NavLink
                            to="/posts"
                            className={({ isActive }) =>
                                `relative inline-block px-1 before:content-[''] before:absolute before:-bottom-1 before:left-0 
       before:h-[2px] before:w-0 before:transition-all before:duration-300 before:bg-purple-500
       ${isActive ? "before:w-full" : "hover:before:w-full"}`
                            }
                        >
                            Posts
                        </NavLink>
                    </li>

                    <li className="hidden sm:block relative  px-1">
                        <NavLink
                            to="/create-post"
                            className={({ isActive }) =>
                                `relative inline-block px-1 before:content-[''] before:absolute before:-bottom-1 before:left-0 
       before:h-[2px] before:w-0 before:transition-all before:duration-300 before:bg-purple-500
       ${isActive ? "before:w-full" : "hover:before:w-full"}`
                            }
                        >
                            Create Post
                        </NavLink>
                    </li>

{/* 
                    <li className="hidden sm:block relative  px-1">
                        <NavLink
                            to="/contact-us"
                            className={({ isActive }) =>
                                `relative inline-block px-1 before:content-[''] before:absolute before:-bottom-1 before:left-0 
       before:h-[2px] before:w-0 before:transition-all before:duration-300 before:bg-purple-500
       ${isActive ? "before:w-full" : "hover:before:w-full"}`
                            }
                        >
                            Contact Us
                        </NavLink>
                    </li> */}
                    <li className="hidden sm:block relative  px-1">
                        <NavLink
                            to="/profile"
                            className={({ isActive }) =>
                                `relative inline-block px-1 before:content-[''] before:absolute before:-bottom-1 before:left-0 
       before:h-[2px] before:w-0 before:transition-all before:duration-300 before:bg-purple-500
       ${isActive ? "before:w-full" : "hover:before:w-full"}`
                            }
                        >
                            Profile
                        </NavLink>
                    </li>


                </ul>

            </nav>
            <div>

            </div>
           { user ? (
            <div className='flex gap-3'>
            <Button name="Logout" onClick={handleLogout} />
             </div>
           ) : 
           
           <div className='flex gap-3'>
                <Button name="Login" onClick={() => {
                    navigate("/login")
                }} />
                <Button name="Sign In" onClick={() => {
                    navigate("/sign-up")
                }} />
            </div>

           }
            
        </header>
    )
}

export default UserNavBar;


