import React, { useState, useEffect } from 'react';
import productsData from '../data/productsData.json';

const TopProducts = () => {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Semua');
  const categories = ['Semua', 'Makanan Utama', 'Makanan Ringan', 'Minuman'];

  useEffect(() => {
    // Simulasi pengambilan data dari JSON
    setProducts(productsData);
  }, []);

  const filteredProducts = activeCategory === 'Semua'
    ? products
    : products.filter(product => product.category === activeCategory);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-green-600 font-bold">Menu Kami</h1>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Produk Unggulan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan kelezatan berbagai makanan Indonesia pilihan yang disiapkan oleh chef profesional dengan
            bahan-bahan berkualitas terbaik.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-10 space-x-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-5 py-2 rounded-full mb-2 ${
                activeCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white text-sm font-medium px-2 py-1 rounded">
                  {product.rating} ★
                </div>
              </div>
              <div className="p-4">
                <span className="text-sm text-green-600">{product.category}</span>
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg">Rp {product.price.toLocaleString('id-ID')}</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
                    + Keranjang
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition-colors font-medium">
            Lihat Semua Produk
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopProducts;