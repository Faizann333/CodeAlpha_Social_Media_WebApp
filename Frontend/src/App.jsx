import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import { AuthProvider } from './store/AuthContext'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { PostProvider } from './store/PostContext';
import { UserProvider } from './store/UserContext';
function App() {
  return (
    <AuthProvider>
      <UserProvider>
       <ToastContainer position="top-right" autoClose={1000} toastClassName="!mt-[80px] !mr-2"/>
       <PostProvider>
      <RouterProvider router={router}/>
      </PostProvider>
      </UserProvider>
    </AuthProvider>
  )
}

export default App
