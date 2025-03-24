import React from 'react';
import { ArrowRight, Code, Users, BookOpen, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen hallo">
      {/* Hero Section */}
      <div className="relative h-screen px-4 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-700 to-blue-800">
          <div className="absolute inset-0 opacity-45" style={{
            backgroundImage: "url('/assets/img/women.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Empowering Women in Technology
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Transform your future through accessible and impactful tech education designed for women, by women.
            </p>
            <button className="bg-white text-purple-700 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition duration-300">
              Explore Programs
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Why Choose Cassiopeia?</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Technical Excellence</h3>
              <p className="text-gray-600">Industry-aligned curriculum designed to build practical expertise in modern technologies.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Supportive Community</h3>
              <p className="text-gray-600">Connect with mentors and peers who understand and support your journey.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Flexible Learning</h3>
              <p className="text-gray-600">Learn at your own pace with our carefully crafted online curriculum.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Our Impact</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
              <div className="text-4xl font-bold mb-2 text-purple-300">5000+</div>
              <div className="text-lg">Women Empowered</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
              <div className="text-4xl font-bold mb-2 text-purple-300">92%</div>
              <div className="text-lg">Career Advancement Rate</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
              <div className="text-4xl font-bold mb-2 text-purple-300">200+</div>
              <div className="text-lg">Industry Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Success Stories</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-purple-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
              <p className="text-gray-700 mb-6">"Cassiopeia transformed my career. The supportive community and practical learning approach helped me land my dream job as a senior developer."</p>
              <div className="font-semibold text-purple-700">Sarah Chen</div>
              <div className="text-sm text-gray-600">Software Engineer at Google</div>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
              <p className="text-gray-700 mb-6">"The mentorship and networking opportunities at Cassiopeia were invaluable. I found my voice and confidence in tech leadership."</p>
              <div className="font-semibold text-purple-700">Maria Rodriguez</div>
              <div className="text-sm text-gray-600">Tech Lead at Microsoft</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}