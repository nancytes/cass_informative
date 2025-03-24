import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-900 to-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="w-6 h-6 text-purple-300" />
              <span className="text-xl font-bold text-white">Cassiopeia</span>
            </div>
            <p className="text-purple-100 mb-6">
              Empowering women to transform the future of technology through education, community, and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-purple-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-purple-300 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-purple-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/programs" className="text-purple-100 hover:text-white flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Our Programs
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-purple-100 hover:text-white flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Community
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-purple-100 hover:text-white flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-purple-100 hover:text-white flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-purple-100">
                <Mail className="w-5 h-5 mr-3 text-purple-300" />
                <a href="mailto:info@cassiopeia.edu" className="hover:text-white">
                  info@cassiopeia.edu
                </a>
              </li>
              <li className="flex items-center text-purple-100">
                <Phone className="w-5 h-5 mr-3 text-purple-300" />
                <a href="tel:+1234567890" className="hover:text-white">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start text-purple-100">
                <MapPin className="w-5 h-5 mr-3 text-purple-300 mt-1" />
                <span>
                  Tech Innovation Center<br />
                  123 Digital Avenue<br />
                  San Francisco, CA 94105
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-purple-100 mb-4">
              Subscribe to our newsletter for the latest updates on programs, events, and tech insights.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-purple-400/30 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-400 transition-colors text-white font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-purple-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-purple-200 text-sm">
              © {new Date().getFullYear()} Cassiopeia. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-purple-200 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-purple-200 hover:text-white">Terms of Service</a>
              <a href="#" className="text-purple-200 hover:text-white">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}