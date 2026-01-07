import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import logo from '../assets/images/logo1.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <img 
              src={logo} 
              alt="Kusum Multi Services" 
              style={{width: '50px', height: '50px'}}
              className="object-contain"
            />
            <div>
              <h1 className="text-lg font-bold text-gray-800 leading-tight">Kusum Multi Services</h1>
              <p className="text-xs text-primary-600 font-semibold">Food Equipment Specialists</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary-600 transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-primary-600 transition-colors">Services</a>
            <a href="#products" className="text-gray-700 hover:text-primary-600 transition-colors">Products</a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone size={16} />
              <span>+91 9376103120</span>
            </div>
            <button className="btn-primary">Get Quote</button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-primary-600">Home</a>
              <a href="#services" className="text-gray-700 hover:text-primary-600">Services</a>
              <a href="#products" className="text-gray-700 hover:text-primary-600">Products</a>
              <a href="#about" className="text-gray-700 hover:text-primary-600">About</a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;