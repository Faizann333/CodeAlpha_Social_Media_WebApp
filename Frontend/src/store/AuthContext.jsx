import axios from "axios";
import { useState, useEffect, createContext } from "react";
import { toast } from "react-toastify";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/auth/get-me`, { withCredentials: true });
      if (response.data.success) {
        setUser(response.data.user);
      }
    } catch (error) {
      setUser(false);
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (signupData) => {
    try {
      const res = await axios.post(`${API_BASE_URL}/auth/sign-up`, signupData, { withCredentials: true });
      toast.success("Signup successful!");
      setUser(res.data.user);
      return true;
    } catch (error) {
      toast.error("Signup failed: " + error.response.data.message);
      return false;
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const res = await axios.post(`${API_BASE_URL}/auth/login`, {
        email,
        password
      }, { withCredentials: true })

      toast.success("Login successful!");
      setUser(res.data.user);
      return true;

    } catch (error) {
      toast.error("Login failed: " + error.response.data.message);
      return false;
    }
  };

  const handleLogout = async () => {

    try {
      const res = await axios.post(`${API_BASE_URL}/auth/logout`, {}, { withCredentials: true });

      if (res.data.success) {
        setUser(null);
        toast.success("Logged out successfully!");
      }
    } catch (error) {
      toast.error("Logout error:", error);
    }
  };



  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, handleLogout, handleLogin,handleSignup, loading }}>
      {children}
    </AuthContext.Provider>
  );
}