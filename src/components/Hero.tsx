import React from 'react';
import { ArrowRight, Shield, Wrench, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-primary-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Professional <span className="text-primary-600">Commercial Food Equipment</span> Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Leading specialists in Rational combi ovens, commercial fryer equipment, and comprehensive maintenance services for restaurants, hotels, and commercial kitchens across India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="btn-primary flex items-center justify-center">
                Get Free Consultation <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="btn-secondary">View Our Products</button>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Shield className="text-primary-600 mb-2" size={32} />
                <span className="text-sm font-semibold">Certified Service</span>
              </div>
              <div className="flex flex-col items-center">
                <Wrench className="text-primary-600 mb-2" size={32} />
                <span className="text-sm font-semibold">Expert Maintenance</span>
              </div>
              <div className="flex flex-col items-center">
                <Star className="text-primary-600 mb-2" size={32} />
                <span className="text-sm font-semibold">Premium Quality</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Commercial Kitchen Equipment" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Modern Kitchen Solutions</h3>
                <p className="text-gray-600">State-of-the-art equipment for professional food preparation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;