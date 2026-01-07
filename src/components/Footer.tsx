import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '../assets/images/logo1.png';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-17 w-full">
      <div className="w-full px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <img
                src={logo}
                alt="Kusum Multi Services"
                style={{ width: '48px', height: '48px' }}
                className="object-contain mr-3"
              />
              <div>
                <h3 className="text-xl font-bold text-white">Kusum Multi Services</h3>
                <p className="text-primary-600 text-sm font-semibold">Food Equipment Specialists</p>
              </div>
            </div>
            <p className="text-gray-300 max-w-md">
              Leading provider of commercial food equipment solutions. Specializing in Rational machines,
              fryer equipment, and comprehensive maintenance services for professional kitchens.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-600">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 hover:text-primary-600 transition-colors flex items-center">→ Equipment Maintenance</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-primary-600 transition-colors flex items-center">→ Rational Machines</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-primary-600 transition-colors flex items-center">→ Fryer Equipment</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary-600 transition-colors flex items-center">→ Technical Support</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary-600 transition-colors flex items-center">→ Emergency Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-600">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-primary-600 transition-colors flex items-center">→ Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-600 transition-colors flex items-center">→ Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-600 transition-colors flex items-center">→ Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-600 transition-colors flex items-center">→ Refund Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-600">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/kusummultiservices" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-600 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.linkedin.com/company/kusummultiservices" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-600 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com/kusummultiservices" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-600 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-12">
          <div className="max-w-7xl mx-auto flex justify-center items-center mt-8">
            <p className="text-gray-400 text-sm">
              © 2026 Kusum Multi Services. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;