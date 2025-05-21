import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="bg-green-50 rounded-lg p-3 relative z-10">
              <img 
                src="/img/about-image.png" 
                alt="Tim Sedap" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-500 rounded-full z-0"></div>
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-yellow-400 rounded-full z-0"></div>
          </div>
          
          {/* Content Column */}
          <div>
            <h1 className="text-green-600 font-extrabold text-3xl">Tentang Kami</h1>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Aplikasi Kuliner Lokal dengan Cita Rasa Otentik</h2>
            <p className="text-gray-600 mb-6">
              Sedap adalah aplikasi kuliner yang menghadirkan kekayaan rasa masakan Indonesia ke meja makan Anda. 
              Kami berkomitmen untuk menyajikan makanan berkualitas tinggi dengan bahan-bahan segar dan resep 
              tradisional yang telah diwariskan secara turun-temurun.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-lg">100% Organik</h4>
                  <p className="text-gray-500">Bahan berkualitas terbaik</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-lg">Pengiriman Cepat</h4>
                  <p className="text-gray-500">Tepat waktu ke rumah Anda</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-lg">Mudah Dipesan</h4>
                  <p className="text-gray-500">Pesan dalam hitungan detik</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-lg">Harga Terjangkau</h4>
                  <p className="text-gray-500">Untuk semua kalangan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;