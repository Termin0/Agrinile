import React from 'react';
import { Shield, Globe, Award, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      title: "Licensed & Compliant",
      description: "All exports meet international standards with proper export licenses"
    },
    {
      icon: <Globe className="w-12 h-12 text-green-600" />,
      title: "Global Reach",
      description: "Successfully exporting to Europe and other global markets for years"
    },
    {
      icon: <Award className="w-12 h-12 text-green-600" />,
      title: "Quality Assured",
      description: "Rigorous quality control and traceability systems"
    },
    {
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: "Trusted Network",
      description: "Direct partnerships with premium Egyptian farms and suppliers"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Agrinile</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in Egyptian agricultural exports, ensuring quality and compliance every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment</h3>
              <p className="text-lg text-gray-600 mb-6">
                Agrinile ensures all exports meet international phytosanitary standards and holds 
                all necessary export licenses. Our network of trusted suppliers has been successfully 
                exporting to Europe and other global markets for years.
              </p>
              <p className="text-lg text-gray-600">
                We bridge the gap between Egypt's rich agricultural heritage and global demand, 
                ensuring that premium Egyptian produce reaches international markets with the 
                highest quality standards and complete regulatory compliance.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Egyptian Agriculture"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;