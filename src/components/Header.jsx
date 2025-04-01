import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/programs', label: 'Programs' },
    { path: '/community', label: 'Community' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center z-50">
            <img src="/assets/img/logocass.png" alt="" className='w-12 h-12'/>
            <span className={`text-2xl font-bold ${isScrolled ? 'text-gradient' : 'text-white'}`}>
              Cassiopeia
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-200 ${isScrolled ? 'text-gray-700 hover:text-brand-purple' : 'text-white hover:text-brand-blue'} ${location.pathname === link.path ? (isScrolled ? 'text-brand-pink' : 'text-brand-blue') : ''}`}
              >
                {link.label}
              </Link>
            ))}

            {/* Longer and Thicker Cute Contact Box */}
            <Link
              to="/contact"
              className={`ml-8 px-8 py-2 bg-gradient-to-r from-pink-300 to-pink-500 text-white rounded-full shadow-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:from-pink-400 hover:to-pink-600 ${
                location.pathname === '/contact' ? 'bg-pink-600 text-white' : ''
              }`}
            >
              Contact
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden z-50"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 hero-gradient md:hidden transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-2xl font-medium text-white hover:text-brand-blue transition-colors duration-200 ${location.pathname === link.path ? 'text-brand-blue' : ''}`}
              >
                {link.label}
              </Link>
            ))}

            {/* Add the Contact link here for mobile menu */}
            <Link
              to="/contact"
              className={`px-8 py-3 bg-gradient-to-r from-pink-300 to-pink-500 text-white rounded-full shadow-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:from-pink-400 hover:to-pink-600 ${
                location.pathname === '/contact' ? 'bg-pink-600 text-white' : ''
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
