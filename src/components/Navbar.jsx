import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, User } from 'lucide-react';

// Asumsikan Logo adalah komponen yang sudah ada
import Logo from './Logo';

export default function Navbar () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efek untuk mengubah tampilan navbar saat di-scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo className="h-10" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/guest" className="text-green-800 hover:text-green-600 font-medium">Beranda</Link>
            <Link to="/about" className="text-green-800 hover:text-green-600 font-medium">Tentang Kami</Link>
            <Link to="/products" className="text-green-800 hover:text-green-600 font-medium">Produk</Link>
            <Link to="/testimonials" className="text-green-800 hover:text-green-600 font-medium">Testimoni</Link>
          </nav>
          
          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* ShoppingCart button now links to TopProducts page */}
            <Link to="/products" className="p-2 rounded-full hover:bg-green-100">
              <ShoppingCart className="h-5 w-5 text-green-800" />
            </Link>
            <Link to="/login" className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
              Masuk / Daftar
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Add ShoppingCart icon for mobile too */}
            <Link to="/top-products" className="p-2 rounded-full hover:bg-green-100">
              <ShoppingCart className="h-5 w-5 text-green-800" />
            </Link>
            <button 
              onClick={toggleMenu} 
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/guest" className="text-green-800 hover:text-green-600 py-2 border-b border-gray-100">Beranda</Link>
              <Link to="/about" className="text-green-800 hover:text-green-600 py-2 border-b border-gray-100">Tentang Kami</Link>
              <Link to="/products" className="text-green-800 hover:text-green-600 py-2 border-b border-gray-100">Produk</Link>
              <Link to="/testimonials" className="text-green-800 hover:text-green-600 py-2 border-b border-gray-100">Testimoni</Link>
              <Link to="/login" className="w-full px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors text-center">
                Masuk / Daftar
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};