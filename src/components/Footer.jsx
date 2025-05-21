import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

// Asumsikan Logo adalah komponen yang sudah ada
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div>
            {/* <div className="mb-4">
              <Logo className="h-10" white />
            </div> */}
            <p className="text-gray-300 mb-6">
              Aplikasi kuliner Indonesia terbaik yang menghadirkan cita rasa otentik Nusantara langsung ke rumah Anda.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Tautan Cepat</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/guest" className="text-gray-300 hover:text-white transition-colors">Beranda</Link>
              </li>
              <li>
                <Link to="/guest/about" className="text-gray-300 hover:text-white transition-colors">Tentang Kami</Link>
              </li>
              <li>
                <Link to="/guest/products" className="text-gray-300 hover:text-white transition-colors">Menu</Link>
              </li>
              <li>
                <Link to="/guest/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/guest/contact" className="text-gray-300 hover:text-white transition-colors">Kontak</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Kontak Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-green-400" />
                <span className="text-gray-300">Jl. Jendral Sudirman No. 123, Jakarta Pusat</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-green-400" />
                <span className="text-gray-300">+62 812-3456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-green-400" />
                <span className="text-gray-300">info@sedap.id</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Berlangganan</h3>
            <p className="text-gray-300 mb-4">
              Dapatkan informasi terbaru tentang menu dan promo menarik dari Sedap.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Email Anda"
                className="px-4 py-3 bg-white bg-opacity-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-white"
              />
              <button type="submit" 
              className="px-4 py-3 bg-green-500 
              text-black rounded-lg shadow-md 
              hover:bg-green-600 transition-colors font-medium" >Berlangganan
              </button>
            </form>
          </div>
        </div>
        
        {/* Partners */}
        <div className="mt-12 pt-8 border-t border-white border-opacity-20">
          <h3 className="text-center text-xl font-bold mb-6">Partner Kami</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img src="/img/partner1.jpg" alt="Partner 1" className="h-12" />
            <img src="/img/partner2.jpg" alt="Partner 2" className="h-12" />
            <img src="/img/partner3.jpg" alt="Partner 3" className="h-12" />
            <img src="/img/partner4.jpg" alt="Partner 4" className="h-12" />
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white border-opacity-20 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Sedap. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;