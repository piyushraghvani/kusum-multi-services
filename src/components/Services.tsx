import React from 'react';
import { Settings, ShoppingCart, Headphones, Clock, CheckCircle, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Settings className="text-primary-600" size={48} />,
      title: "Equipment Maintenance",
      description: "Professional maintenance and repair services for Rational machines, fryers, and all food preparation equipment.",
      features: ["24/7 Emergency Support", "Preventive Maintenance", "Genuine Parts Only"]
    },
    {
      icon: <ShoppingCart className="text-primary-600" size={48} />,
      title: "Equipment Sales",
      description: "Premium quality Rational machines, commercial fryers, and complete kitchen equipment solutions.",
      features: ["Latest Models", "Competitive Pricing", "Installation Included"]
    },
    {
      icon: <Headphones className="text-primary-600" size={48} />,
      title: "Technical Support",
      description: "Expert technical consultation and support for optimal equipment performance and efficiency.",
      features: ["Remote Diagnostics", "Training Programs", "Performance Optimization"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Commercial Food Equipment Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert Rational machine maintenance, commercial fryer repair, and professional kitchen equipment solutions for restaurants, hotels, and food service businesses in Ahmedabad, Gujarat.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-primary-600 rounded-2xl p-8 text-white text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Clock size={48} className="mb-4" />
              <h3 className="text-2xl font-bold mb-2">Fast Response</h3>
              <p>Same-day service calls for urgent repairs</p>
            </div>
            <div className="flex flex-col items-center">
              <Users size={48} className="mb-4" />
              <h3 className="text-2xl font-bold mb-2">Expert Team</h3>
              <p>Certified technicians with years of experience</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle size={48} className="mb-4" />
              <h3 className="text-2xl font-bold mb-2">Quality Guarantee</h3>
              <p>All work backed by comprehensive warranty</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;