import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/public/WhatsApp Image 2025-08-23 at 23.02.03_6b3039bb.jpg" 
              alt="Agrinile Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-green-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-green-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-green-600 transition-colors">
              Products
            </button>
            <button onClick={() => scrollToSection('markets')} className="text-gray-700 hover:text-green-600 transition-colors">
              Markets
            </button>
            <button onClick={() => scrollToSection('why-us')} className="text-gray-700 hover:text-green-600 transition-colors">
              Why Us
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-green-600 transition-colors">
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-gray-700 hover:text-green-600 w-full text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-700 hover:text-green-600 w-full text-left">
                About
              </button>
              <button onClick={() => scrollToSection('products')} className="block px-3 py-2 text-gray-700 hover:text-green-600 w-full text-left">
                Products
              </button>
              <button onClick={() => scrollToSection('markets')} className="block px-3 py-2 text-gray-700 hover:text-green-600 w-full text-left">
                Markets
              </button>
              <button onClick={() => scrollToSection('why-us')} className="block px-3 py-2 text-gray-700 hover:text-green-600 w-full text-left">
                Why Us
              </button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-700 hover:text-green-600 w-full text-left">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;