import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/public/WhatsApp Image 2025-08-23 at 23.02.03_6b3039bb.jpg" 
                alt="Agrinile Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Connecting Egypt's Premium Produce to the World
            </p>
            <p className="text-gray-400 text-sm">
              Licensed export brokerage firm specializing in high-quality Egyptian agricultural products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-green-400 transition-colors">Products</a></li>
              <li><a href="#markets" className="text-gray-300 hover:text-green-400 transition-colors">Markets</a></li>
              <li><a href="#why-us" className="text-gray-300 hover:text-green-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-green-400 mr-3" />
                <a href="mailto:info@agrinile.com" className="text-gray-300 hover:text-green-400 transition-colors">
                  info@agrinile.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-green-400 mr-3" />
                <a href="tel:+201553804734" className="text-gray-300 hover:text-green-400 transition-colors">
                  +20 155 380 4734
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-gray-300">Egypt</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Agrinile. All rights reserved. | Licensed Egyptian Agricultural Export Company
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;