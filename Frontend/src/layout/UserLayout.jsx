import React from 'react'
import { Outlet } from 'react-router-dom';
import UserNavbar from '../components/UserNavbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <UserNavbar/>
      <Outlet />
      <Footer/>
    </div>
  )
}

export default Home;

