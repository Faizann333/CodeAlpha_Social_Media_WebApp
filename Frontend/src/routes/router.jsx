import { createBrowserRouter } from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute"
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import UserLayout from "../layout/UserLayout";
import CreatePost from "../pages/CreatePost";

const router = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout />,
        children: [

            { path: "/login", element: <Login /> },
            { path: "/sign-up", element: <SignUp /> },
            { path: "/create-post", element: <CreatePost /> }
        ]
    }
])

export default router;