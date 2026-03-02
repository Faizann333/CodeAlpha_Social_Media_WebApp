import React from 'react'
import { Outlet } from 'react-router-dom';
import UserNavbar from '../components/UserNavbar';

const Home = () => {
  return (
    <div>
      <UserNavbar/>
      <Outlet />
    </div>
  )
}

export default Home;

