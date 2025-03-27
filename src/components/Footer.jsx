import React from "react";
import { Link } from "react-router-dom";

import { 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  ArrowRight 
} from "lucide-react";
import { FaTelegram } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-900 to-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
          <Link to="/" className="flex items-center z-50">
  <img src="/assets/img/logocass.png" alt="" className="w-12 h-12" />
  <span className="text-2xl font-bold text-white">
    Cassiopeia
  </span>
</Link>

            <p className="text-purple-100 mb-6">
              Empowering women to transform the future of technology through
              education, community, and innovation.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61564889536858"
                className="text-purple-300 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://t.me/cassiopeiagirlstech"
   className="text-purple-300 hover:text-white transition-colors">
  <FaTelegram className="w-5 h-5" />
</a>

              <a
                href="https://www.linkedin.com/company/cassiopeia-girls-tech/"
                className="text-purple-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/cassiopeiatech"
                className="text-purple-300 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>"



          </div>

          {/* Quick Links */}
          <div className="pl-12">
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/programs"
                  className="text-purple-100 hover:text-white flex items-center"
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Our Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/community"
                  className="text-purple-100 hover:text-white flex items-center"
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Community
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-purple-100 hover:text-white flex items-center"
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-purple-100 hover:text-white flex items-center"
                >
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
                <a
                  href="mailto:membership@cassiopeiatech.org"
                  className="hover:text-white"
                >
                  info@cassiopeiatech.org 
                  
                </a>
              </li>
              <li className="flex items-center text-purple-100">
                <Phone className="w-5 h-5 mr-3 text-purple-300" />
                <a href="tel:+1234567890" className="hover:text-white">
                +251 (969) 870-922 <br></br>
                +251 (962) 042-225
                </a>
              </li>
              {/* <li className="flex items-start text-purple-100">
                <MapPin className="w-5 h-5 mr-3 text-purple-300 mt-1" />
                <span>
                  Tech Innovation Center
                  <br />
                  123 Digital Avenue
                  <br />
                  San Francisco, CA 94105
                </span>
              </li> */}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-purple-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <div className="text-purple-200 text-sm text-center">
              © {new Date().getFullYear()} Cassiopeia. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
