import React from 'react';
import { Heart, Target, Sparkles, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Mission & Vision
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl">
            Empowering women to shape the future of technology through education, community, and opportunity.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
              <p className="text-gray-600 mb-8">
                Cassiopeia is dedicated to breaking down barriers and creating pathways for women to excel in technology. We believe in the power of education, mentorship, and community to transform lives and create a more diverse, inclusive tech industry.
              </p>
              <p className="text-gray-600">
                Through our comprehensive programs and supportive network, we empower women to develop technical expertise, leadership skills, and the confidence to pursue their dreams in technology.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Vision</h2>
              <p className="text-gray-600 mb-8">
                We envision a future where women are equally represented and valued in technology, where diverse perspectives drive innovation, and where every woman has the opportunity to realize her full potential in tech.
              </p>
              <p className="text-gray-600">
                Our goal is to create a global network of empowered women who support and inspire each other while making significant contributions to the tech industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Our Core Values</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Empowerment</h3>
              <p className="text-gray-600">Providing women with the tools and confidence to succeed in tech.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">Maintaining high standards in education and support.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">Embracing new technologies and teaching methods.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Growth</h3>
              <p className="text-gray-600">Fostering continuous learning and development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Leadership Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80" 
                alt="Team member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Dr. Emily Chen</h3>
              <p className="text-purple-600 mb-4">Founder & CEO</p>
              <p className="text-gray-600">Former Tech Lead at Google with 15+ years of industry experience.</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" 
                alt="Team member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
              <p className="text-purple-600 mb-4">Head of Education</p>
              <p className="text-gray-600">PhD in Computer Science, specialized in AI and Machine Learning.</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80" 
                alt="Team member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Maria Rodriguez</h3>
              <p className="text-purple-600 mb-4">Community Director</p>
              <p className="text-gray-600">10+ years experience in building tech communities and mentorship programs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}