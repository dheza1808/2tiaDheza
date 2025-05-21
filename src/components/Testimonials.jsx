import React, { useState, useEffect } from 'react';
import testimonialsData from '../data/testimonialsData.json';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Simulasi pengambilan data dari JSON
    setTestimonials(testimonialsData);
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Fungsi untuk menampilkan bintang rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`h-5 w-5 ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }
    return stars;
  };

  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-green-600 font-bold">Testimoni</h1>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Apa Kata Pelanggan Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lihat pengalaman para pelanggan kami yang telah menikmati layanan dan berbagai menu lezat dari Sedap.
          </p>
        </div>

        {testimonials.length > 0 && (
          <div className="relative max-w-4xl mx-auto">
            {/* Testimonial Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-green-200">
                    <img
                      src={testimonials[activeIndex].avatar}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-2">
                    {renderStars(testimonials[activeIndex].rating)}
                  </div>
                  <p className="text-gray-700 text-lg italic mb-4">
                    "{testimonials[activeIndex].comment}"
                  </p>
                  <h4 className="font-bold text-xl">{testimonials[activeIndex].name}</h4>
                  <p className="text-green-600">Pelanggan Setia</p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-green-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-green-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        )}

        {/* Indicators */}
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`mx-1 w-3 h-3 rounded-full focus:outline-none ${
                index === activeIndex ? 'bg-green-600' : 'bg-gray-300'
              }`}
            ></button>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors font-medium">
            Lihat Semua Ulasan
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;