import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GuestLayout from './layouts/GuestLayout';
import TentangKami from './components/AboutSection';
import Produk from './components/TopProducts';
import Testimoni from './components/Testimonials';
import AboutSection from './components/AboutSection';
import TopProducts from './components/TopProducts';
import HeroSection from './components/HeroSection';
import MembershipCheck from './components/MembershipCheck';

 
function App() {
  return (
    <Router>
      <Routes>
        <Route element = {<GuestLayout />}>
          <Route path="/" element={<HeroSection/>} />
          <Route path="/about" element={<AboutSection/>} /> 
          <Route path="/products" element={<TopProducts />} /> 
          <Route path="/testimonials" element={<Testimoni />} />
          <Route path='/membership' element={<MembershipCheck/>} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
