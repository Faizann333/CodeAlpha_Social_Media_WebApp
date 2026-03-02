import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button'
import { useState } from 'react';
import axios from 'axios';
import {toast} from "react-toastify";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import { useContext } from 'react';
import { AuthContext } from '../store/AuthContext';

const SignUp = () => {

  const {handleSignup} = useContext(AuthContext);
  const navigate = useNavigate();
      const [name, setName] = useState('');
      const [userName, setUserName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');

  const onSignup = async (e) => {
    e.preventDefault();

    const signupData = {
      name,
      userName,
      email,
      password,
      confirmPassword
    };
    const res = await handleSignup(signupData);
    if(res){
        setName('');
        setUserName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        
        navigate('/');
    }

  }

  return (
    <div className='min-h-[80vh]'>
      
         <h1 className='text-3xl font-bold text-center mt-10'>Create New Account</h1>
            <form className='w-[400px] mx-auto mt-10 flex flex-col gap-5' onSubmit={onSignup}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='border px-3 py-2 rounded'/>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='Username' className='border px-3 py-2 rounded'/>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='border px-3 py-2 rounded'/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='border px-3 py-2 rounded'/>
                <input type="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password' className='border px-3 py-2 rounded'/> 
                <p>Already have an account? <Link to="/login" className="text-purple-600 hover:underline">Login</Link></p>   
                <Button name= "Sign Up" className="bg-purple-600 h-[50px] w-[120px] hover:bg-purple-700"/>
            </form>
    </div>

  )
}

export default SignUp;