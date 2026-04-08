import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default MainLayout;
