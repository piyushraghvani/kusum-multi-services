import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import rationalMachine from '../assets/images/RationalMachine.png';
import commercialFryer from '../assets/images/commercialdeepfryer.png';
import compactcombioven from '../assets/images/compactcombioven.png';

const Products = () => {
  const products = [
    {
      name: "Rational CombiMaster Plus",
      category: "Combi Steamers",
      image: rationalMachine,
      features: ["6-20 GN Capacity", "Intelligent Cooking", "Energy Efficient"],
      rating: 4.9
    },
    {
      name: "Commercial Deep Fryer",
      category: "Fryer Equipment",
      image: commercialFryer,
      features: ["High Capacity", "Temperature Control", "Easy Cleaning"],
      rating: 4.8
    },
    {
      name: "Rational SelfCookingCenter",
      category: "Smart Ovens",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      features: ["Automatic Cooking", "Recipe Management", "Remote Monitoring"],
      rating: 5.0
    },
    {
      name: "Compact Combi Oven",
      category: "Specialized Equipment",
      image: compactcombioven,
      features: ["Fast Cooking", "Oil Efficiency", "Safety Features"],
      rating: 4.7
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium quality food preparation equipment from leading manufacturers, designed for commercial kitchens and food service operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-primary-600 font-semibold mb-2">{product.category}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{product.name}</h3>
                
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm ml-2">({product.rating})</span>
                </div>

                <ul className="space-y-1 mb-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600 text-sm">• {feature}</li>
                  ))}
                </ul>

                <button className="w-full btn-primary flex items-center justify-center">
                  Learn More <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Need Custom Solutions?</h3>
          <p className="text-gray-600 mb-6">We provide tailored equipment packages for your specific requirements</p>
          <button className="btn-secondary">Request Custom Quote</button>
        </div>
      </div>
    </section>
  );
};

export default Products;