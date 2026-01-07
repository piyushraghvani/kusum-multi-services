import React from 'react';
import { Award, Users, Clock, MapPin } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users size={32} />, number: "500+", label: "Happy Clients" },
    { icon: <Clock size={32} />, number: "10+", label: "Years Experience" },
    { icon: <Award size={32} />, number: "1000+", label: "Equipment Serviced" },
    { icon: <MapPin size={32} />, number: "50+", label: "Service Locations" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Kusum Multi Services</h2>
            <p className="text-lg text-gray-600 mb-6">
              With over a decade of experience in the food equipment industry, Kusum Multi Services has established itself as a trusted partner for restaurants, hotels, and commercial kitchens across the region.
            </p>
            <p className="text-gray-600 mb-8">
              We specialize in Rational cooking equipment, commercial fryers, and comprehensive maintenance services. Our certified technicians ensure your equipment operates at peak performance, minimizing downtime and maximizing efficiency.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Award className="text-primary-600 mr-3" size={24} />
                <span className="text-gray-700">Authorized Rational Service Partner</span>
              </div>
              <div className="flex items-center">
                <Award className="text-primary-600 mr-3" size={24} />
                <span className="text-gray-700">Certified Commercial Equipment Specialists</span>
              </div>
              <div className="flex items-center">
                <Award className="text-primary-600 mr-3" size={24} />
                <span className="text-gray-700">24/7 Emergency Service Available</span>
              </div>
            </div>
          </div>

          <div>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Professional Kitchen Service" 
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <div className="mt-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="text-primary-600 mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-primary-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              To provide exceptional food equipment solutions and services that help our clients achieve operational excellence, 
              reduce costs, and deliver outstanding culinary experiences to their customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;