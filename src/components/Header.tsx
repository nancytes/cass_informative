import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Code, Users, BookOpen } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Sparkles className={`w-8 h-8 ${isScrolled ? 'text-purple-600' : 'text-white'}`} />
            <span className={`text-2xl font-bold ${isScrolled ? 'text-purple-600' : 'text-white'}`}>
              Cassiopeia
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-purple-200'}`}>
              Home
            </Link>
            <Link to="/programs" className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-purple-200'}`}>
              Programs
            </Link>
            <Link to="/community" className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-purple-200'}`}>
              Community
            </Link>
            <Link to="/about" className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-purple-200'}`}>
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}