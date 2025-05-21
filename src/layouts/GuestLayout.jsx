import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';


export default function GuestLayout (){
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">  
        <Outlet/>      
      </main>
      <Footer />
    </div>
  );
};
