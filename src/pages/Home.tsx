import React from 'react';
import { ArrowRight, Code, Users, BookOpen, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-700 to-blue-800">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')",
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
            <button
  className="bg-white text-purple-700 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition duration-300"
  onClick={() => window.open("https://t.me/cassiopeiagirlstech", "_blank")}
>
  Explore Programs
</button>

          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
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
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Impact In Future</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
              <div className="text-4xl font-bold mb-2 text-purple-300">500+</div>
              <div className="text-lg">Women Empower</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
              <div className="text-4xl font-bold mb-2 text-purple-300">92%</div>
              <div className="text-lg">Career Advancement Rate</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
              <div className="text-4xl font-bold mb-2 text-purple-300">20+</div>
              <div className="text-lg">Industry Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
     <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
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
              <p className="text-gray-700 mb-6">"Known for her work on Charles Babbage’s Analytical Engine. She wrote the first algorithm and envisioned computers doing more than calculations laying the foundation for modern computing."</p>
              <div className="font-semibold text-purple-700">Ada Lovelace</div>
              <div className="text-sm text-gray-600">The First Computer Programmer</div>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
              <p className="text-gray-700 mb-6">"Invented the Spanning Tree Protocol (STP) which made large scale networking possible. Her contributions shaped how the internet functions today."</p>
              <div className="font-semibold text-purple-700">Radia Perlman</div>
              <div className="text-sm text-gray-600">Mother of the Internet</div>
            </div>
          </div>
        </div>
      </section> 
    </div>
  );
}