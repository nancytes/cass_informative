import React from 'react';
import { Users, MessageCircle, Calendar, Globe } from 'lucide-react';

export default function Community() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Global Community
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl">
            Connect with like-minded women in tech, share experiences, and grow together in a supportive environment.
          </p>
        </div>
      </div>

      {/* Community Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-purple-50 rounded-lg p-8">
              <Users className="w-12 h-12 text-purple-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Mentorship Network</h3>
              <p className="text-gray-600 mb-6">
                Connect with experienced mentors who can guide you through your tech journey, provide career advice, and share industry insights.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>• One-on-one mentoring sessions</li>
                <li>• Career guidance and support</li>
                <li>• Industry expert connections</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-8">
              <MessageCircle className="w-12 h-12 text-purple-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Discussion Forums</h3>
              <p className="text-gray-600 mb-6">
                Engage in meaningful discussions, share knowledge, and learn from peers in our active community forums.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>• Technical discussions</li>
                <li>• Career advice threads</li>
                <li>• Project collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Upcoming Events</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-purple-600 text-white p-4">
                <Calendar className="w-8 h-8 mb-2" />
                <div className="text-sm">MAR 15, 2025</div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">Tech Leadership Workshop</h3>
                <p className="text-gray-600 text-sm">Virtual workshop on developing leadership skills in tech.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-purple-600 text-white p-4">
                <Calendar className="w-8 h-8 mb-2" />
                <div className="text-sm">MAR 22, 2025</div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">Code Review Session</h3>
                <p className="text-gray-600 text-sm">Peer code review and best practices discussion.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-purple-600 text-white p-4">
                <Calendar className="w-8 h-8 mb-2" />
                <div className="text-sm">MAR 29, 2025</div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">Career Fair</h3>
                <p className="text-gray-600 text-sm">Virtual networking event with top tech companies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Our Global Impact</h2>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">courses</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-gray-600">Active Members</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Mentors</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-gray-600">Events Hosted</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}