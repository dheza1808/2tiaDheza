import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center h-screen flex items-center">
      <div className="absolute top-20 left-0 w-full h-170 z-0 overflow-hidden">
  <img
    src="/img/hero-bg.jpg"
    alt="Latar belakang Hero"
    className="absolute top-10 left-0 w-full h-full object-cover filter blur-md scale-105"
  />
</div>

      {/* Konten utama */}
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-xl">
          <span className="text-green-400 bg-green-900 bg-opacity-50 px-4 py-1 rounded-full text-sm font-medium uppercase tracking-wide">
            Aplikasi Kuliner Indonesia
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
            Nikmati Kelezatan Makanan Indonesia
          </h1>
          <p className="text-xl mb-8">
            Sedap menghadirkan berbagai macam makanan lokal Indonesia yang otentik dan berkualitas, langsung diantar ke rumah Anda.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/products"
              className="px-8 py-3 bg-white text-blue-300 rounded-full hover:bg-green-700 transition-colors text-center font-medium"
            >
              Jelajahi Menu
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 bg-white text-blue-300 rounded-full hover:bg-green-700 transition-colors text-center font-medium"
            >
              Tentang Kami
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
