import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <img 
            src="/public/WhatsApp Image 2025-08-23 at 23.02.03_6b3039bb.jpg" 
            alt="Agrinile Logo" 
            className="h-16 w-auto mx-auto mb-4"
          />
        </div>
        
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-green-100">
          Connecting Egypt's Premium Produce to the World
        </h2>
        
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-100">
          Agrinile is a licensed export brokerage firm that partners with top Egyptian farmers 
          and suppliers to deliver high-quality fruits and vegetables to international markets.
        </p>
        
        <button 
          onClick={scrollToContact}
          className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Contact Us
          <ArrowRight className="ml-2" size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;