import React from 'react';
import { Apple, Cherry, Grape, Leaf } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: <Apple className="w-16 h-16 text-orange-500" />,
      name: "Mangoes",
      description: "Premium Egyptian mangoes with exceptional sweetness and flavor",
      season: "May - September"
    },
    {
      icon: <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl">🍊</div>,
      name: "Citrus Fruits",
      description: "Fresh oranges, mandarins, and lemons from the Nile Delta",
      season: "November - April"
    },
    {
      icon: <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl">🍠</div>,
      name: "Sweet Potato",
      description: "Nutritious sweet potatoes with excellent storage and shipping qualities",
      season: "September - February"
    },
    {
      icon: <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-800 font-bold text-xl">🧅</div>,
      name: "Onions",
      description: "High-quality onions with excellent flavor and long shelf life",
      season: "March - June"
    },
    {
      icon: <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-800 font-bold text-xl">🧄</div>,
      name: "Garlic",
      description: "Premium Egyptian garlic with strong flavor and natural preservation",
      season: "April - July"
    },
    {
      icon: <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">🍅</div>,
      name: "Vegetables",
      description: "Fresh tomatoes, peppers, and other premium vegetables",
      season: "Year-round"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover Egypt's finest agricultural exports, carefully selected and quality-assured for international markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-6">
                {product.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {product.season}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-green-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Guarantee</h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              All our products undergo rigorous quality control processes and meet international 
              phytosanitary standards. We ensure proper packaging, cold chain management, and 
              timely delivery to maintain freshness and quality throughout the export journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;