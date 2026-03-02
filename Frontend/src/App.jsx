import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import { AuthProvider } from './store/AuthContext'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <AuthProvider>
       <ToastContainer position="top-right" autoClose={1000} toastClassName="!mt-[80px] !mr-2"/>
      <RouterProvider router={router}/>
    </AuthProvider>
  )
}

export default App
