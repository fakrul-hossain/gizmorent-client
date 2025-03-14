import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';


const Root = () => {
  return (
    <div className="font-sans">
      <nav>
        <Navbar
        />
      </nav >
      <div className='w-11/12 mx-auto max-w-7xl'>
        <Outlet></Outlet>
      </div>
      <div className='mt-4'>
        <Footer />
      </div>
    </div>
  );
};

export default Root;