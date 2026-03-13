import React, { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [userPosts, setUserPosts] = useState([]);

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
    
        const fetchPosts = async () => {
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

          const fetchUserPosts = async () => {
            try {
                const res = await axios.get(
                    `${API_BASE_URL}/user/fetch-user-posts`,
                    { withCredentials: true }
                );
                setUserPosts(res.data.posts);
            } catch (error) {
                toast.error("Error fetching user posts:", error);
            }

        }

        const likePostHandler = async (postId) => {
            try {
                const res = await axios.post(
                    `${API_BASE_URL}/user/like-post/${postId}`,
                    {},
                    { withCredentials: true }
                );

                toast.success("Post liked successfully!");
                fetchPosts();
            }
                catch (error) {
                    toast.error(`Error liking post: ${error.message}`);
                }
        }

        const commentPostHandler = async (postId, comment) => {
            try {
                const res = await axios.post(
                    `${API_BASE_URL}/user/comment-post/${postId}`,
                    { comment },
                    { withCredentials: true }
                );
                toast.success("Comment added successfully!");
                fetchPosts();
            }
                catch (error) {
                    toast.error(`Error adding comment: ${error.message}`);
                }
        }


    
    return (
        <PostContext.Provider value={{ posts, setPosts, uploadPost, fetchPosts , fetchUserPosts, userPosts, likePostHandler, commentPostHandler }}>
            {children}
        </PostContext.Provider>
    );
};