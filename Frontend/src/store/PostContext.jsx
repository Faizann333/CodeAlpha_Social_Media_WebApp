import React, { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    const uploadPost = async (post) => {
        try {
            const res = await axios.post(
                `${API_BASE_URL}/user/upload-post`,
                post,
                { withCredentials: true }
            );


            toast.success("Post created successfully!");
        } catch (error) {
            toast.error("Error creating post:", error);
        }
    }
        const fetchPost = async () => {
            try {
                const res = await axios.get(
                    `${API_BASE_URL}/user/fetch-posts`,
                    { withCredentials: true }
                );
                setPosts(res.data.posts);
            } catch (error) {
                toast.error("Error fetching posts:", error);
            }

        }

    
    return (
        <PostContext.Provider value={{ posts, setPosts, uploadPost, fetchPost }}>
            {children}
        </PostContext.Provider>
    );
};