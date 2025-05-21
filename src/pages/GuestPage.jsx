import React from 'react';
import { Outlet } from 'react-router-dom';
import GuestLayout from '../layouts/GuestLayout';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TopProducts from '../components/TopProducts';
import Testimonials from '../components/Testimonials';

const GuestPage = () => {
  return (
    <GuestLayout>
      <HeroSection />
      <AboutSection />
      <TopProducts />
      <Testimonials />
    </GuestLayout>
  );
};

export default GuestPage;