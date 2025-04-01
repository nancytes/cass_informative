import React from 'react';
import { 
  Users, MessageCircle, Calendar, Globe, Star, 
  ArrowRight, Heart, Target, CheckCircle, Mail,
  Phone, MapPin, Send, Sparkles, Code, Database,
  Cloud, Clock
} from 'lucide-react';

export default function Community() {
  const upcomingEvents = [
    {
      title: "Tech Leadership Workshop",
      description: "Virtual workshop on developing leadership skills in tech.",
      type: "Virtual",
    },
    {
      title: "Code Review Session",
      description: "Peer code review and best practices discussion.",
      type: "Online",
    },
    {
      title: "Career Fair",
      description: "Virtual networking event with top tech companies.",
      type: "Virtual",
    }
  ];

  const communityGroups = [
    {
      icon: <Code className="w-6 h-6" />,
      name: "Web Development",
      description: "Connect with fellow web developers, share knowledge, and collaborate on projects."
    },
    {
      icon: <Database className="w-6 h-6" />,
      name: "Data Science",
      description: "Discuss data analysis, machine learning, and AI with passionate data scientists."
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      name: "Cloud Computing",
      description: "Exchange cloud architecture best practices and stay updated with latest trends."
    }
  ];

  const handleRegisterClick = () => {
    window.open("https://t.me/CassiopeiaGTBot", "_blank");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[75vh] px-4 md:px-8">
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
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-purple-800/85 to-blue-900/90 opacity-40"></div>
        </div>

        {/* Content */}
        <div className="relative h-full">
          <div className="max-w-7xl mx-auto px-4 h-full">
            <div className="flex flex-col justify-center h-full">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
                Join Our Global Tech Community
              </h1>
              <p className="text-xl text-white max-w-2xl mb-8 drop-shadow-md">
                Connect with like-minded women in tech, share experiences, and grow together in a supportive environment.
                Be part of a movement that's transforming the tech industry.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <Users className="w-5 h-5 text-brand-blue" />
                  <span className="font-medium text-white">10,000+ Members</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <Globe className="w-5 h-5 text-brand-pink" />
                  <span className="font-medium text-white">50+ Countries</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <Heart className="w-5 h-5 text-brand-purple" />
                  <span className="font-medium text-white">500+ Mentors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Community Features */}
      <section className="py-20 bg-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Community Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-brand-pink to-brand-purple p-[2px] rounded-xl">
              <div className="bg-white p-6 rounded-xl h-full">
                <div className="bg-gradient-to-br from-brand-pink to-brand-purple w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Mentorship Network</h3>
                <p className="text-gray-600 mb-6">
                  Connect with experienced mentors who can guide you through your tech journey, provide career advice, and share industry insights.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-brand-purple" />
                    <span>One-on-one mentoring</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-brand-purple" />
                    <span>Career guidance</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-brand-purple" />
                    <span>Expert networking</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-purple to-brand-blue p-[2px] rounded-xl">
              <div className="bg-white p-6 rounded-xl h-full">
                <div className="bg-gradient-to-br from-brand-purple to-brand-blue w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Discussion Forums</h3>
                <p className="text-gray-600 mb-6">
                  Engage in meaningful discussions, share knowledge, and learn from peers in our active community forums.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-brand-purple" />
                    <span>Technical discussions</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-brand-purple" />
                    <span>Career advice</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-brand-purple" />
                    <span>Project collaboration</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-blue to-brand-pink p-[2px] rounded-xl">
              <div className="bg-white p-6 rounded-xl h-full">
                <div className="bg-gradient-to-br from-brand-blue to-brand-pink w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Events & Workshops</h3>
                <p className="text-gray-600 mb-6">
                  Participate in regular events, workshops, and networking sessions designed to enhance your skills and connections.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-brand-purple" />
                    <span>Virtual workshops</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-brand-purple" />
                    <span>Networking events</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-brand-purple" />
                    <span>Tech talks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-purple-50 px-4 md:px-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Upcoming Events</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-r from-brand-pink via-brand-purple to-brand-blue text-white p-4">
                  <Calendar className="w-8 h-8 mb-2" />
                  <div className="text-sm">{event.date}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4" />
                      <span>{event.type}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <button 
                    onClick={handleRegisterClick}
                    className="mt-6 w-full bg-gradient-to-r from-brand-pink to-brand-purple text-white py-2 rounded-lg hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <span>Register Now</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact */}
      <section className="py-20 bg-gradient-to-r from-brand-pink via-brand-purple to-brand-blue text-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Global Impact</h2>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">courses</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-lg">Active Members</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">Mentors</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-lg">Events Hosted</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}