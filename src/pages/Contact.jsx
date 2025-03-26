import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Building2, GraduationCap, Briefcase, Heart, Globe } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: '',
    message: '',
    interest: 'general'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh]">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: "url('/assets/img/women2.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-purple-800/85 to-blue-900/90 opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative h-full">
          <div className="max-w-7xl mx-auto px-4 h-full">
            <div className="flex flex-col justify-center h-full">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
                Let's Start Your Journey Together
              </h1>
              <p className="text-xl text-white max-w-2xl mb-8 drop-shadow-md">
                Whether you're interested in our programs, looking to partner with us, or just want to learn more about Cassiopeia, 
                we're here to help you take the next step in your tech journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <Users className="w-5 h-5 text-brand-blue" />
                  <span className="font-medium text-white">500+ Women Empower</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <Globe className="w-5 h-5 text-brand-pink" />
                  <span className="font-medium text-white">Global Community</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <Heart className="w-5 h-5 text-brand-purple" />
                  <span className="font-medium text-white">Dedicated Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <div className="sticky top-24">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Ways to Connect</h2>
                
                <div className="space-y-8 mb-12">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-brand-pink to-brand-purple p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Email Us</h3>
                      <p className="text-gray-600 mb-2">We typically respond within 24 hours</p>
                      <a href="mailto:membership@cassiopeiatech.org" className="text-brand-purple hover:text-brand-pink transition-colors">
                      info@cassiopeiatech.org
                      </a>
                      <br />
                      {/* <a href="mailto:support@cassiopeia.edu" className="text-brand-purple hover:text-brand-pink transition-colors">
                        membership@cassiopeiatech.org
                      </a> */}
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-brand-purple to-brand-blue p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Call Us</h3>
                      <p className="text-gray-600 mb-2">Available Monday through Friday</p>
                      <p className="text-brand-purple">+251 (969) 870-922</p>
                      <p className="text-brand-purple">+251 (962) 042-225</p>
                      
                    </div>
                  </div>

                  {/* <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-brand-blue to-brand-pink p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Visit Us</h3>
                      <p className="text-gray-600 mb-2">Our doors are always open</p>
                      <p className="text-gray-700">
                        Tech Innovation Center<br />
                        123 Digital Avenue<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div> */}

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-brand-pink to-brand-purple p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    {/* <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Office Hours</h3>
                      <p className="text-gray-600 mb-2">Visit us during these hours</p>
                      <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-700">Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-gray-700">Sunday: Closed</p>
                    </div> */}
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-purple-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Quick Links</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-brand-purple transition-colors">
                      <GraduationCap className="w-5 h-5" />
                      <span>Programs</span>
                    </a>
                    <a href="/Community" className="flex items-center space-x-2 text-gray-600 hover:text-brand-purple transition-colors">
                      <Users className="w-5 h-5" />
                      <span>Community</span>
                    </a>
                    <a href="/Programs" className="flex items-center space-x-2 text-gray-600 hover:text-brand-purple transition-colors">
                      <Building2 className="w-5 h-5" />
                      <span>Careers</span>
                    </a>
                    <a href="/Contact" className="flex items-center space-x-2 text-gray-600 hover:text-brand-purple transition-colors">
                      <Briefcase className="w-5 h-5" />
                      <span>Partners</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you as soon as possible. 
                  We're excited to hear from you and learn how we can help you achieve your tech goals.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all duration-200"
                        placeholder="Aberash Debe"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all duration-200"
                        placeholder="aberash@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all duration-200"
                        placeholder="+251 (934) 567-890"
                      />
                    </div>

                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                        Organization
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all duration-200"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                      I'm interested in
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all duration-200"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="programs">Educational Programs</option>
                      <option value="mentorship">Mentorship</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="career">Career Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all duration-200"
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all duration-200"
                      placeholder="Tell us how we can help you..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-brand-pink via-brand-purple to-brand-blue text-white py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>

              {/* Additional Info Box */}
              {/* <div className="mt-8 bg-gradient-to-r from-brand-pink via-brand-purple to-brand-blue p-8 rounded-2xl text-white">
                <div className="flex items-start space-x-4">
                  <MessageSquare className="w-8 h-8 flex-shrink-0" />
                  {/* <div>
                    <h3 className="text-xl font-semibold mb-2">Need Immediate Assistance?</h3>
                    <p className="mb-4">
                      Our support team is available for live chat during business hours. 
                      We also offer 24/7 email support for urgent inquiries.
                    </p>
                    <button className="bg-white text-brand-purple px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors duration-200">
                      Start Live Chat
                    </button>
                  </div> 
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Visit Our Campus</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Silicon Valley Innovation Hub</h3>
              <p className="text-gray-600 mb-6">
                Located in the heart of San Francisco's tech district, our campus is easily accessible 
                and designed to inspire innovation. Come visit us to experience our state-of-the-art 
                facilities and vibrant learning environment.
              </p>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-brand-purple" />
                  <span>123 Digital Avenue, San Francisco, CA 94105</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-brand-purple" />
                  <span>Open Monday - Saturday</span>
                </div>
                <button className="mt-4 bg-gradient-to-r from-brand-pink to-brand-purple text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-200 flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Get Directions</span>
                </button>
              </div>
            </div>
            <div className="h-96 rounded-xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0947064280845!2d-122.39997168441525!3d37.78779977975772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807abad77c31%3A0x1f8c679c0e0afc4d!2sFinancial%20District%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1645654700000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}