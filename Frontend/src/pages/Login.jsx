import { Link , useNavigate} from 'react-router-dom'
import Button from '../components/Button'
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../store/AuthContext';
import { toast } from 'react-toastify';


const Login = () => {
  const { handleLogin } = useContext(AuthContext);
  const navigate = useNavigate(); 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = async (e) => {
    e.preventDefault();
   const res = await handleLogin(email, password);
   if(res){
    setEmail('');
    setPassword('');
    navigate('/');
   }

  }
  
  

  return (
    <div className='min-h-[80vh]'>
      
         <h1 className='text-3xl font-bold text-center mt-15'>Login to your Account</h1>
            <form className='w-[400px] mx-auto mt-10 flex flex-col gap-5' onSubmit={onLogin}>
               
                <input type="email" placeholder='Email' className='border px-3 py-2 rounded' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder='Password' className='border px-3 py-2 rounded' value={password} onChange={(e) => setPassword(e.target.value)}/> 
                <p>Don't have an account? <Link to="/sign-up" className="text-purple-600 hover:underline">Sign Up</Link></p>   
                <Button name= "Login" className="bg-purple-600 h-[50px] w-[120px] hover:bg-purple-700"/>
            </form>
    </div>
  )
}

export default Login
