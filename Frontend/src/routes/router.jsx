import { createBrowserRouter } from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute"
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

import UserLayout from "../layout/UserLayout";
import CreatePost from "../pages/CreatePost";
import Posts from "../pages/Posts";
import Friends from "../pages/Friends";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout />,
        children: [

            { path: "/login", element: <Login /> },
            { path: "/sign-up", element: <SignUp /> },
            { path: "/Posts", element: <Posts /> },
            { path: "/create-post", element: <ProtectedRoute><CreatePost /></ProtectedRoute>},
            { path: "/find-friends", element: <ProtectedRoute><Friends /></ProtectedRoute> },
            {path: "profile", element: <ProtectedRoute><Profile /></ProtectedRoute>}
        ]
    }
])

export default router;
