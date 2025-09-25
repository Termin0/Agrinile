import React from 'react';
import { Shield, Truck, Award, Users, CheckCircle, Clock } from 'lucide-react';

const WhyUs = () => {
  const advantages = [
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      title: "Licensed & Compliant",
      description: "Fully licensed with all necessary export permits and compliance with international phytosanitary standards"
    },
    {
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: "Direct Farm Connections",
      description: "Direct partnerships with premium Egyptian farms ensuring the highest quality produce"
    },
    {
      icon: <Truck className="w-12 h-12 text-green-600" />,
      title: "Reliable Logistics",
      description: "Expert logistics coordination and export management for timely, safe delivery"
    },
    {
      icon: <Award className="w-12 h-12 text-green-600" />,
      title: "Quality Control",
      description: "Rigorous quality control processes and complete traceability from farm to destination"
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-green-600" />,
      title: "Proven Track Record",
      description: "Years of successful exports to Europe and global markets with satisfied clients"
    },
    {
      icon: <Clock className="w-12 h-12 text-green-600" />,
      title: "Timely Delivery",
      description: "Consistent on-time delivery with proper cold chain management and handling"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Agrinile?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your success is our priority. Here's what sets us apart in the Egyptian agricultural export industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-6">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="bg-green-50 rounded-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h3>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 relative">
              <div className="text-6xl text-green-200 absolute top-4 left-4">"</div>
              <blockquote className="text-xl text-gray-700 italic mb-6 pl-12">
                Agrinile delivers consistent quality and timely shipments. They have become our trusted 
                partner in Egypt, providing reliable access to premium Egyptian produce. Their attention 
                to quality control and regulatory compliance gives us complete confidence in every shipment.
              </blockquote>
              <div className="flex items-center pl-12">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  M.S.
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Marco Schmidt</div>
                  <div className="text-gray-600">Import Manager, European Fresh Produce Ltd.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;