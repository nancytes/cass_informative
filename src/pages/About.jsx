import React from 'react';
import { 
  Heart, Target, Sparkles, BookOpen, Users, 
  Award, Star, Globe, ArrowRight, CheckCircle,
  GraduationCap, Code, Brain, MessageCircle
} from 'lucide-react';

export default function About() {
  const coreValues = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Empowerment",
      description: "Providing women with the tools, knowledge, and confidence to succeed in tech."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description: "Maintaining high standards in education and support through industry-leading programs."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Innovation",
      description: "Embracing new technologies and teaching methods to stay ahead of industry trends."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Growth",
      description: "Fostering continuous learning and personal development in every member."
    }
  ];

  const achievements = [
    {
      number: "5000+",
      label: "Graduates",
      description: "Successfully completed our programs"
    },
    {
      number: "92%",
      label: "Success Rate",
      description: "Of graduates advance their careers"
    },
    {
      number: "200+",
      label: "Partners",
      description: "Industry-leading tech companies"
    },
    {
      number: "50+",
      label: "Countries",
      description: "Global community reach"
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Emily Chen",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      bio: "Former Tech Lead at Google with 15+ years of industry experience.",
      expertise: ["Tech Leadership", "AI/ML", "Product Strategy"]
    },
    {
      name: "Sarah Johnson",
      role: "Head of Education",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
      bio: "PhD in Computer Science, specialized in AI and Machine Learning.",
      expertise: ["Computer Science", "Education", "Research"]
    },
    {
      name: "Maria Rodriguez",
      role: "Community Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
      bio: "10+ years experience in building tech communities and mentorship programs.",
      expertise: ["Community Building", "Mentorship", "DEI"]
    }
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-900 to-blue-800 text-white py-20 px-4 md:px-8 relative text-white">
      <div className="absolute inset-0 opacity-45" style={{
            backgroundImage: "url('/assets/img/women2.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}></div>
        
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transforming Tech Education for Women
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                We're on a mission to create a more diverse and inclusive tech industry by empowering women 
                through education, community, and opportunity.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-brand-pink" />
                  <span>Award-Winning Programs</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                  <Globe className="w-5 h-5 text-brand-blue" />
                  <span>Global Impact</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                  <Users className="w-5 h-5 text-brand-purple" />
                  <span>Diverse Community</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" 
                alt="Team Collaboration"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-brand-pink to-brand-purple p-[2px] rounded-xl ">
              <div className="bg-white p-8 rounded-xl h-full">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
                <p className="text-gray-600 mb-8">
                  Cassiopeia is dedicated to breaking down barriers and creating pathways for women to excel in technology. 
                  We believe in the power of education, mentorship, and community to transform lives and create a more 
                  diverse, inclusive tech industry.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Provide world-class tech education designed for women</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Build a supportive global community of women in tech</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Create opportunities for career advancement and leadership</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-brand-purple to-brand-blue p-[2px] rounded-xl">
              <div className="bg-white p-8 rounded-xl h-full">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Vision</h2>
                <p className="text-gray-600 mb-8">
                  We envision a future where women are equally represented and valued in technology, where diverse 
                  perspectives drive innovation, and where every woman has the opportunity to realize her full potential in tech.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Achieve gender parity in tech leadership positions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Foster innovation through diverse perspectives</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Create a global network of empowered women in tech</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-purple-50 px-4 md:px-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Our Core Values</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-br from-brand-pink to-brand-purple w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-r from-brand-pink via-brand-purple to-brand-blue text-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Impact</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-lg rounded-lg p-8">
                <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                <div className="text-xl mb-2">{achievement.label}</div>
                <div className="text-sm text-purple-200">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto  px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Leadership Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-brand-pink to-brand-purple p-[2px] rounded-xl">
                <div className="bg-white rounded-xl p-6">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
                  <p className="text-brand-purple text-center mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-4 text-center">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, i) => (
                      <span 
                        key={i}
                        className="bg-purple-50 text-brand-purple px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      {/* <section className="py-20 bg-purple-50 px-4 md:px-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-brand-pink via-brand-purple to-brand-blue rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Be part of a movement that's transforming the tech industry. Whether you're starting your journey
              or looking to give back, there's a place for you at Cassiopeia.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-brand-purple px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-200 font-semibold flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors duration-200">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}