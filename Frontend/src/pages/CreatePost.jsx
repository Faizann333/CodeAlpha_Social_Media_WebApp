import { useState ,useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { PostContext } from "../store/PostContext";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const CreatePost = () => {
  const { uploadPost } = useContext(PostContext);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: ""
    // imageUrl: ""
 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
        uploadPost(formData);
  
      // Reset form
      setFormData({
        title: "",
        content: "",
        category: ""
     
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center p-6">
      <div className="bg-gray-800 shadow-xl rounded-2xl p-8 w-full max-w-2xl text-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Create New Post
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Title */}
          <input
            type="text"
            name="title"
            placeholder="Post Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border border-gray-600 bg-gray-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Content */}
          <textarea
            name="content"
            placeholder="Write your post content..."
            rows="6"
            value={formData.content}
            onChange={handleChange}
            required
            className="w-full border border-gray-600 bg-gray-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Category */}
          <input
            type="text"
            name="category"
            placeholder="Category (e.g. Tech, AI, News)"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full border border-gray-600 bg-gray-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Image URL
          <input
            type="text"
            name="imageUrl"
            placeholder="Featured Image URL"
            value={formData.imageUrl}
            onChange={handleChange}
            className="w-full border border-gray-600 bg-gray-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          /> */}

         
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 transition py-3 rounded-lg font-semibold"
          >
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;