import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Send, Users, Building2, GraduationCap, Briefcase, Heart, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    phone: '',
    organization: '',
    subject: '',
    message: '',
    interest: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    message: '',
    isError: false
  });

  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);
      setSubmitStatus({ message: 'Sending message...', isError: false });
      
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      

      
      if (result.text === 'OK') {
        setSubmitStatus({ message: 'Message sent successfully!', isError: false });
        setFormData({
          user_name: '',
          user_email: '',
          phone: '',
          organization: '',
          subject: '',
          message: '',
          interest: 'general'
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({
        message: 'Failed to send message. Please try again.',
        isError: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <div className="relative h-[75vh] px-4 md:px-8">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-purple-800/85 to-blue-900/90 opacity-40"></div>
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
                  <span className="font-medium text-white">5000+ Women Empowered</span>
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
      <section className="py-20 bg-white px-4 md:px-8">
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
                      <a href="mailto:info@cassiopeiatech.org" className="text-brand-purple hover:text-brand-pink transition-colors">
                        info@cassiopeiatech.org
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-brand-purple to-brand-blue p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Call Us</h3>
                      <p className="text-gray-600 mb-2">Available Monday through Friday</p>
                      <a href="tel:+251969870922" className="text-brand-purple block hover:text-brand-pink transition-colors">
                        +251 (969) 870-922
                      </a>
                      <a href="tel:+251962042225" className="text-brand-purple hover:text-brand-pink transition-colors">
                        +251 (962) 042-225
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-purple-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Quick Links</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Link to="/programs" className="flex items-center space-x-2 text-gray-600 hover:text-brand-purple transition-colors">
                      <GraduationCap className="w-5 h-5" />
                      <span>Programs</span>
                    </Link>
                    <Link to="/community" className="flex items-center space-x-2 text-gray-600 hover:text-brand-purple transition-colors">
                      <Users className="w-5 h-5" />
                      <span>Community</span>
                    </Link>
                    {/* <Link to="/careers" className="flex items-center space-x-2 text-gray-600 hover:text-brand-purple transition-colors">
                      <Building2 className="w-5 h-5" />
                      <span>Careers</span>
                    </Link>
                    <Link to="/partners" className="flex items-center space-x-2 text-gray-600 hover:text-brand-purple transition-colors">
                      <Briefcase className="w-5 h-5" />
                      <span>Partners</span>
                    </Link> */}
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
                
                {submitStatus.message && (
                  <div 
                    className={`mb-6 p-4 rounded-lg ${
                      submitStatus.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="user_name"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all duration-200"
                        placeholder="Aberash Debe"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="user_email"
                        name="user_email"
                        value={formData.user_email}
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
                      rows={6}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all duration-200"
                      placeholder="Tell us how we can help you..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-brand-pink via-brand-purple to-brand-blue text-white py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90 hover:shadow-xl'
                    }`}
                  >
                    <Send className="w-5 h-5" />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}